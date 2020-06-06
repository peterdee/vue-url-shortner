<template>
  <div class="flex direction-column index">
    <LinkModal
      :id="short.id"
      :link="short.link"
      :show="showLinkModal"
      :url="short.url"
      @handle-link-modal="handleLinkModal"
    />
    <SecretModal
      :show="showSecretModal"
      @handle-secret-modal="handleSecretModal"
    />
    <div class="noselect text-center title">
      URL Shortner
    </div>
    <IndexForm
      :handleInput="handleInput"
      :isLoading="isLoading"
      :secret="secret"
      :secretStatus="secretStatus"
      :url="url"
      :URLStatus="URLStatus"
      @handle-form="handleForm"
      @handle-secret-modal="handleSecretModal"
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
import IndexForm from './components/IndexForm';
import LinkModal from './components/LinkModal';
import SecretModal from './components/SecretModal';

import { BACKEND } from '../../config';
import sanitize from '../../utilities/sanitize';
import validate from '../../utilities/validate-url';

export default {
  components: {
    ErrorMessage,
    IndexForm,
    LinkModal,
    SecretModal,
  },
  data() {
    return {
      error: '',
      isLoading: false,
      secret: '',
      secretStatus: 'active',
      short: {
        id: '',
        link: '',
        url: '',
      },
      showLinkModal: false,
      showSecretModal: false,
      url: '',
      URLStatus: 'active',
    };
  },
  methods: {
    /**
     * Handle form
     * @returns {Promise<void>}
     */
    async handleForm() {
      try {
        // check the values
        if (!(this.secret && this.url)) {
          this.secretStatus = (!this.secret && 'error') || 'active';
          this.URLStatus = (!this.url && 'error') || 'active';
          return this.error = 'Please provide URL and Secret!';
        }

        // check the trimmed values and sanitize them
        const trimmedSecret = sanitize(this.secret.trim());
        const trimmedURL = sanitize(this.url.trim());
        if (!(trimmedSecret && trimmedURL)) {
          this.secretStatus = (!trimmedSecret && 'error') || 'active';
          this.URLStatus = (!trimmedURL && 'error') || 'active';
          return this.error = 'Please provide URL and Secret!';
        }
        
        // validate the URL
        if (!validate(trimmedURL)) {
          this.URLStatus = 'error';
          return this.error = 'Please provide a valid URL address!';
        }

        this.secretStatus = 'success';
        this.URLStatus = 'success';
        this.isLoading = true;

        // send the request
        const { data: { data: response = {} } = {} } = await axios({
          data: {
            secret: trimmedSecret,
            url: trimmedURL,
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          method: 'POST',
          url: `${BACKEND}/create`,
        });

        this.isLoading = false;
        this.secretStatus = 'active';
        this.showSecretModal = false
        this.URLStatus = 'active';

        // check the response
        const { id = '', link = '', url = '' } = response;
        if (!(id && link && url)) {
          return this.error = 'Oops! Something went wrong...';
        }
        this.short = {
          id,
          link,
          url,
        };

        // clear the form and show the Link modal
        this.secret = '';
        this.url = '';
        return this.showLinkModal = true;
      } catch (error) {
        this.isLoading = false;
        this.secretStatus = 'active';
        this.showSecretModal = false
        this.URLStatus = 'active';

        const { response: { data: { info = '', status = null } = {} } = {} } = error;

        if (status && status === 400) {
          switch (info) {
            case 'MISSING_DATA': {
              this.secretStatus = 'error';
              this.URLStatus = 'error';
              return this.error = 'Missing the required data!';
            }
            case 'INVALID_DATA': {
              this.secretStatus = 'error';
              this.URLStatus = 'error';
              return this.error = 'Provided data is invalid!';
            }
            case 'INVALID_URL': {
              this.URLStatus = 'error';
              return this.error = 'Provided URL is invalid!';
            }
            default:
              return this.error = 'Error! Short link was not created!';
          }
        }

        return this.error = 'Error! Short link was not created!';
      }
    },
    /**
     * Handle inputs for the form
     * @param {InputEvent} event - event object
     * @returns {void}
     */
    handleInput(event = {}) {
      const { target: { name = '', value = '' } = {} } = event;
      if (name === 'secret') this.secretStatus = 'active';
      if (name === 'url') this.URLStatus = 'active';
      this.error = '';
      return this[name] = value;
    },
    /**
     * Toggle the Link modal
     * @returns {void}
     */
    handleLinkModal() {
      return this.showLinkModal = !this.showLinkModal;
    },
    /**
     * Toggle the Secret modal
     * @returns {void}
     */
    handleSecretModal() {
      return this.showSecretModal = !this.showSecretModal;
    },
  },
  name: 'Index',
};
</script>

<style scoped>
.index {
  margin: auto 0;
  min-height: 470px;
  padding: 16px;
}
.title {
  color: rgb(43, 134, 146);
  font-size: 36px;
  font-weight: 100;
}
</style>
