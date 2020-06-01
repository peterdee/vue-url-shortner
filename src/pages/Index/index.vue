<template>
  <div class="flex direction-column index">
    <div class="noselect text-center title">
      URL Shortner
    </div>
    <IndexForm
      :isLoading="isLoading"
      :secretStatus="secretStatus"
      :URLStatus="URLStatus"
      @handle-form="handleForm"
    />
    <ErrorMessage
      :isLoading="isLoading"
      :message="error"
    />
  </div>
</template>

<script>
import ErrorMessage from '../../components/ErrorMessage';
import IndexForm from './components/IndexForm';

export default {
  components: {
    ErrorMessage,
    IndexForm,
  },
  data() {
    return {
      error: '',
      isLoading: false,
      secretStatus: 'active',
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
        console.log('is submitting');
        this.isLoading = true;
      } catch (error) {
        this.isLoading = false;
        this.error = "Error!"
        console.log('is error', error);
      }
    },
  },
  name: 'Index',
};
</script>

<style scoped>
.index {
  padding: 16px;
}
.title {
  font-size: 36px;
  font-weight: 100;
  margin-top: 64px;
}
</style>
