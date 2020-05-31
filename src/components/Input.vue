<template>
  <input
    :type="type"
  />
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: {
      required: true,
      type: String,
    },
  },
}
</script>

<style scoped>
input {
  border: none;
  border: 1px solid rgb(36, 42, 49);
  border-radius: 3px;
  font-size: 20px;
  padding: 32px;
}
</style>
