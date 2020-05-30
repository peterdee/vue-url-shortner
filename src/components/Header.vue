<template>
  <div class="flex noselect header">
    <div>
      <a href="/">Index</a>
    </div>
    <div>
      <a href="/manage">Manage</a>
    </div>
    <div>
      <a href="/about">About</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.header {
  font-size: 16px;
  font-weight: 200;
}
</style>
