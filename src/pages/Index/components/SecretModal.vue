<template>
  <div
    v-if="show"
    class="modal"
  >
    Secret modal
  </div>
</template>

<script>
export default {
  name: 'SecretModal',
  props: {
    show: {
      required: true,
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.modal {
  background-color: white;
  border: 1px solid silver;
  border-radius: 8px;
  position: fixed;
  top: calc(50% - 125px);
  left: calc(50% - 125px);
  min-width: 250px;
  min-height: 200px;
  padding: 16px;
}
</style>
