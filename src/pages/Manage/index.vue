<template>
  <div class="flex direction-column manage">
    <div class="title noselect">
      Manage
    </div>
    <ManageModal
      :clicks="loaded.clicks"
      :handleInput="handleInput"
      :id="loaded.id"
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
      if (name === 'secret') this.secretStatus = 'active';
      if (name === 'short') this.shortStatus = 'active';
      this.error = '';
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

        this.secretStatus = 'success';
        this.URLStatus = 'success';
        this.isLoading = true;

        // send the request
        const shortId = this.short.split('/').slice(-1);
        const { data: { data: response = {} } = {} } = await axios({
          method: 'GET',
          url: `${BACKEND}/get/${shortId}`,
        });

        this.isLoading = false;
        this.secretStatus = 'active';
        this.shortStatus = 'active';

        // check the response
        const {
          clicks = null,
          id = '',
          link = '',
          updated = null,
          url = '',
        } = response;
        console.log(response)
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
    handleSecretForm() {
      return console.log('secret form');
    },
    /**
     * Toggle the Manage modal
     * @returns {void}
     */
    handleManageModal() {
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
