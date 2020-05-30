<template>
  <div>
    <div class="flex direction-column wrap">
      <Header />
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

export default {
  components: {
    Footer,
    Header,
  },
  name: 'App',
};
</script>

<style scoped>
.wrap {
  min-height: calc(100vh - 30px);
}
</style>
