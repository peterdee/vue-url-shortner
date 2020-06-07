<template>
  <div
    class="background"
    @click="$emit('handle-modal-background')"
  />
</template>

<script>
export default {
  name: 'ModalBackground',
}
</script>

<style scoped>
.background {
  background-color: black;
  height: 100vh;
  left: 0;
  opacity: 0.5;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
</style>
