<template>
  <textarea
    :disabled="disabled"
    :value="value"
  />
</template>

<script>
export default {
  name: 'Textarea',
  props: {
    disabled: {
      required: true,
      type: Boolean,
    },
    value: {
      required: true,
      type: [Number, String],
    },
  },
}
</script>

<style scoped>
textarea {
  background-color: rgb(240, 240, 240);
  border: none;
  border-radius: 3px;
  color: black;
  font-size: 16px;
  height: 80px;
  padding: 16px;
  resize: none;
  width: 100%;
}
</style>
