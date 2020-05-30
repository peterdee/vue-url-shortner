<template>
  <div>
    <div class="flex direction-column wrap">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer';
import './App.css';

export default {
  components: {
    Footer,
  },
  name: 'App',
};
</script>

<style scoped>
.wrap {
  min-height: calc(100vh - 30px);
}
</style>
