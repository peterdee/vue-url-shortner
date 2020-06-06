<template>
  <div class="flex justify-content-center slight-margin-top">
    <button
      class="pointer noselect"
      type="button"
      @click="$emit('handle-click')"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    text: {
      required: true,
      type: String,
    },
  },
}
</script>

<style scoped>
button {
  background-color: transparent;
  border: none;
  color:rgb(43, 134, 146);
  font-size: 12px;
  font-weight: 200;
}
button:hover {
  text-decoration: underline;
}
.slight-margin-top {
  margin-top: 4px;
}
</style>
