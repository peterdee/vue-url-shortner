<template>
  <div class="flex direction-column justify-content-center align-items-center not-found">
    <div class="title text-center noselect">
      OOPS! REQUESTED PAGE NOT FOUND!
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.not-found {
  margin: auto 0;
  padding: 16px;
}
.title {
  color: rgb(43, 134, 146);
  font-size: 20px;
  font-weight: 100;
}
</style>
