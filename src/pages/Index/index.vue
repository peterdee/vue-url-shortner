<template>
  <div class="flex direction-column index">
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

import { BACKEND } from '../../config';
import ErrorMessage from '../../components/ErrorMessage';
import IndexForm from './components/IndexForm';
import SecretModal from './components/SecretModal';

export default {
  components: {
    ErrorMessage,
    IndexForm,
    SecretModal,
  },
  data() {
    return {
      error: '',
      isLoading: false,
      secret: '',
      secretStatus: 'active',
      showLinkModal: true,
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
          return this.error = "Please provide the URL and Secret!"
        }

        // check the trimmed values
        const trimmedSecret = this.secret.trim();
        const trimmedURL = this.url.trim();
        if (!(trimmedSecret && trimmedURL)) {
          this.secretStatus = (!trimmedSecret && 'error') || 'active';
          this.URLStatus = (!trimmedURL && 'error') || 'active';
          return this.error = "Please provide the URL and Secret!"
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

        console.log(response);

        this.secret = '';
        this.secretStatus = 'active';
        this.url = '';
        this.URLStatus = 'active';
        return this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.error = "Error!"
        console.log('is error', error);
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
     * Toggle the modal for the Secret input
     * @returns {void}
     */
    handleSecretModal() {
      return this.showSecretModal = !this.showSecretModal;
    }
  },
  name: 'Index',
};
</script>

<style scoped>
.index {
  min-height: 500px;
  padding: 16px;
}
.title {
  color: rgb(43, 134, 146);
  font-size: 36px;
  font-weight: 100;
  margin-top: 64px;
}
</style>
