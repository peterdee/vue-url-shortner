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
  margin: 0 auto;
  max-width: 732px;
  min-height: calc(100vh - 40px);
  min-width: 432px;
  width: 50%;
  padding: 0 16px;
}
</style>
