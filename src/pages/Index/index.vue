<template>
  <div class="flex direction-column index">
    <div class="text-center title">
      URL Shortner
    </div>
    <IndexForm />
  </div>
</template>

<script>
import IndexForm from './IndexForm';

export default {
  components: {
    IndexForm,
  },
  name: 'Index',
};
</script>

<style scoped>
.index {
  padding: 16px;
}
.title {
  font-size: 36px;
  font-weight: 100;
  margin-top: 64px;
}
</style>
