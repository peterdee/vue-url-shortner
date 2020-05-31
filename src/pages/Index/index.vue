<template>
  <div class="flex direction-column index">
    <div class="text-center title">
      URL Shortner
    </div>
    <IndexForm
      :isLoading="isLoading"
      @handle-form="handleForm"
    />
  </div>
</template>

<script>
import IndexForm from './components/IndexForm';

export default {
  components: {
    IndexForm,
  },
  data() {
    return {
      isLoading: false,
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
        console.log('is error')
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
