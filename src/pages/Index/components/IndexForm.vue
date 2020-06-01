<template>
  <form @submit.prevent="$emit('handle-form')">
    <div class="margin-top">
      <Input
        :disabled="isLoading"
        name="url"
        placeholder="URL"
        :status="URLStatus"
        type="text"
      />
    </div>
    <div class="margin-top">
      <Input
        :disabled="isLoading"
        name="secret"
        placeholder="Secret"
        :status="secretStatus"
        type="text"
      />
    </div>
    <button
      class="margin-top"
      type="submit"
    >
      CREATE
    </button>
  </form>
</template>

<script>
import Input from '../../../components/Input';

export default {
  components: {
    Input,
  },
  name: 'IndexForm',
  props: {
    isLoading: {
      required: true,
      type: Boolean,
    },
    secretStatus: {
      required: true,
      type: String,
    },
    URLStatus: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>

</style>