<template>
  <div class="flex justify-content-center align-items-center noselect margin-top error">
    <div
      v-if="!isLoading && message"
      class="flex justify-content-center align-items-center text-center message"
    >
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    isLoading: {
      required: true,
      type: Boolean,
    },
    message: {
      default() {
        return '';
      },
      required: false,
      type: String,
    },
  },
};
</script>

<style scoped>
.error {
  height: 70px;
}
.message {
  background-color: rgb(146, 43, 43);
  border-radius: 3px;
  color: white;
  font-size: 24px;
  font-weight: 200;
  height: 70px;
  width: 100%;
}
</style>
