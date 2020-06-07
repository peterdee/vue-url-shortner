<template>
  <div class="flex justify-content-center">
    <button
      class="pointer noselect"
      type="button"
      @click="$emit('handle-action-button')"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    text: {
      default() {
        return 'OK';
      },
      required: false,
      type: String,
    },
  },
}
</script>

<style scoped>
button {
  background-color: rgb(43, 134, 146);
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 16px;
  min-width: 100px;
  padding: 8px 0;
  transition: background-color 250ms ease-in-out;
}
button:hover {
  background-color: rgb(99, 220, 236);
  transition: background-color 250ms ease-in-out;
}
</style>
