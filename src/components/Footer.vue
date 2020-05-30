<template>
  <div class="noselect text-center footer">
    <a href="https://github.com/peterdee">Peter Dyumin</a>, {{ new Date().getFullYear() }}
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
.footer {
  font-size: 12px;
  font-weight: 200;
}
</style>
