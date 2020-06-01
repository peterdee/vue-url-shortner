<template>
  <input
    :class="[
      'styles',
      hasError,
    ]"
    :disabled="disabled"
    :name="name"
    :placeholder="placeholder"
    :type="type"
  />
</template>

<script>
export default {
  computed: {
    hasError() {
      return (this.status === 'error' && 'error') || '';
    },
  },
  name: 'Input',
  props: {
    disabled: {
      required: true,
      type: Boolean,
    },
    name: {
      required: true,
      type: String,
    },
    placeholder: {
      required: true,
      type: String,
    },
    status: {
      required: true,
      type: String,
    },
    type: {
      required: true,
      type: String,
    },
  },
}
</script>

<style scoped>
.styles {
  border: none;
  border: 1px solid rgb(36, 42, 49);
  border-radius: 3px;
  font-size: 20px;
  padding: 16px;
  width: 100%;
}
.error {
  border: 1px solid #ff5566;
}
</style>
