<template>
  <div class="flex direction-column manage">
    <div class="title noselect">
      Manage
    </div>
    <ManageModal
      :clicks="loaded.clicks"
      :error="secretError"
      :handleInput="handleInput"
      :id="loaded.id"
      :isLoading="isLoading"
      :link="loaded.link"
      :secret="secret"
      :secretStatus="secretStatus"
      :show="showManageModal"
      :updated="loaded.updated"
      :url="loaded.url"
      @handle-manage-modal="handleManageModal"
      @handle-secret-form="handleSecretForm"
    />
    <ManageForm
      :handleInput="handleInput"
      :isLoading="isLoading"
      :short="short"
      :shortStatus="shortStatus"
      @handle-search-form="handleSearchForm"
    />
    <ErrorMessage
      :isLoading="isLoading"
      :message="error"
    />
  </div>
</template>

<script>
import axios from 'axios';

import ErrorMessage from '../../components/ErrorMessage';
import ManageForm from './components/ManageForm';
import ManageModal from './components/ManageModal';

import { BACKEND } from '../../config';
import sanitize from '../../utilities/sanitize';
import validate from '../../utilities/validate-url';

export default {
  components: {
    ErrorMessage,
    ManageForm,
    ManageModal,
  },
  data() {
    return {
      error: '',
      isLoading: false,
      loaded: {
        clicks: null,
        id: '',
        link: '',
        updated: '',
        url: '',
      },
      secret: '',
      secretError: '',
      secretStatus: 'active',
      short: '',
      shortStatus: 'active',
      showManageModal: false,
    };
  },
  methods: {
    /**
     * Handle inputs for the forms
     * @param {InputEvent} event - event object
     * @returns {void}
     */
    handleInput(event = {}) {
      const { target: { name = '', value = '' } = {} } = event;
      if (name === 'secret') {
        this.secretError = '';
        this.secretStatus = 'active';
      }
      if (name === 'short') {
        this.error = '';
        this.shortStatus = 'active';
      }
      return this[name] = value;
    },
    /**
     * Handle the search form
     * @returns {Promise<void>}
     */
    async handleSearchForm() {
      try {
        // check the values
        if (!this.short) {
          this.shortStatus = 'error';
          return this.error = 'Please provide Short URL!';
        }

        // check the trimmed values and sanitize them
        const trimmedShort = sanitize(this.short.trim());
        if (!trimmedShort) {
          this.shortStatus = 'error';
          return this.error = 'Please provide Short URL!';
        }
        
        // validate the URL
        if (!validate(trimmedShort)) {
          this.shortStatus = 'error';
          return this.error = 'Please provide a valid Short URL!';
        }

        this.isLoading = true;
        this.shortStatus = 'success';

        // send the request
        const shortId = this.short.split('/').slice(-1);
        const { data: { data: response = {} } = {} } = await axios({
          method: 'GET',
          url: `${BACKEND}/get/${shortId}`,
        });

        this.isLoading = false;
        this.shortStatus = 'active';

        // check the response
        const {
          clicks = null,
          id = '',
          link = '',
          updated = null,
          url = '',
        } = response;
        if (!(id && link && updated && url)) {
          return this.error = 'Oops! Something went wrong...';
        }
        this.loaded = {
          clicks,
          id,
          link,
          updated,
          url,
        };

        // clear the modal form and show the modal
        this.secret = '';
        return this.showManageModal = true;
      } catch (error) {
        this.isLoading = false;
        return console.log(error);
      }
    },
    /**
     * Handle the secret form
     * @returns {Promise<void>}
     */
    async handleSecretForm() {
      try {
        // check the values
        if (!this.secret) {
          this.secretStatus = 'error';
          return this.secretError = 'Please provide your Secret!';
        }

        // check the trimmed values and sanitize them
        const trimmedSecret = sanitize(this.secret.trim());
        if (!trimmedSecret) {
          this.secretStatus = 'error';
          return this.secretError = 'Please provide your Secret!';
        }

        this.isLoading = true;
        this.secretStatus = 'success';

        // send the request
        const shortId = this.short.split('/').slice(-1);
        await axios({
          data: {
            secret: trimmedSecret,
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          method: 'POST',
          url: `${BACKEND}/delete/${shortId}`,
        });

        // close the modal
        this.isLoading = false;
        this.secret = '';
        this.secretStatus = 'active';
        this.short = '';
        this.shortStatus = 'active';
        return this.showManageModal = false;
      } catch (error) {
        this.isLoading = false;
        this.secretStatus = 'active';
        this.shortStatus = 'active';

        const { response: { data: { info = '', status = null } = {} } = {} } = error;

        if (status && status === 400 && info && info === 'MISSING_DATA') {
          this.secretStatus = 'error';
          return this.secretError = 'Missing the required data!';
        }

        if (status && status === 401 && info && info === 'ACCESS_DENIED') {
          this.secretStatus = 'error';
          return this.secretError = 'Secret is incorrect!';
        }

        if (status && status === 404 && info && info === 'LINK_NOT_FOUND') {
          return this.secretError = 'Short URL not found!';
        }

        return this.secretError = 'Oops! Something went wrong...';
      }
    },
    /**
     * Toggle the Manage modal
     * @returns {void}
     */
    handleManageModal() {
      this.secret = '';
      this.secretError = '';
      this.secretStatus = 'active';
      return this.showManageModal = !this.showManageModal;
    },
  },
  name: 'Manage',
};
</script>

<style scoped>
.manage {
  padding: 16px;
}
.title {
  color: rgb(43, 134, 146);
  font-size: 24px;
  font-weight: 100;
}
</style>
