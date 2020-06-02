<template>
  <form @submit.prevent="$emit('handle-form')">
    <div class="margin-top">
      <Input
        :disabled="isLoading"
        name="url"
        placeholder="URL"
        :status="URLStatus"
        type="text"
        :value="url"
        @input="handleInput"
      />
    </div>
    <div class="margin-top">
      <Input
        :disabled="isLoading"
        name="secret"
        placeholder="Secret"
        :status="secretStatus"
        type="text"
        :value="secret"
        @input="handleInput"
      />
    </div>
    <div class="flex justify-content-center">
      <button
        class="button-show-secret"
        type="button"
        @click="$emit('handle-secret-modal')"
      >
        Why do I need to provide a Secret?
      </button>
    </div>
    <button
      class="margin-top pointer create-button"
      :disabled="isLoading"
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
    handleInput: {
      required: true,
      type: Function,
    },
    isLoading: {
      required: true,
      type: Boolean,
    },
    secret: {
      required: true,
      type: String,
    },
    secretStatus: {
      required: true,
      type: String,
    },
    url: {
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
.button-show-secret {
  background-color: transparent;
  border: none;
  color:rgb(43, 134, 146);
  font-size: 12px;
  font-weight: 200;
}
.button-show-secret:hover {
  text-decoration: underline;
}
.create-button {
  background-color: rgb(43, 134, 146);
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 20px;
  padding: 20px 36px;
  transition: background-color 250ms ease-in-out;
  width: 100%;
}
.create-button:hover {
  background-color: rgb(99, 220, 236);
  transition: background-color 250ms ease-in-out;
}
</style>
