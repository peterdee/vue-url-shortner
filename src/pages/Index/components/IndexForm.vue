<template>
  <form @submit.prevent="$emit('handle-form')">
    <div class="margin-top">
      <input placeholder="URL" type="text" />
    </div>
    <div class="margin-top">
      <input placeholder="Secret" type="text" />
    </div>
    <button class="margin-top" type="submit">CREATE</button>
  </form>
</template>

<script>
export default {
  name: 'IndexForm',
  props: {
    isLoading: {
      required: true,
      type: Boolean,
    },
  },
};
</script>

<style scoped>

</style>