<template>
  <div>
    <div class="flex direction-column wrap">
      <Header />
      <div class="flex direction-column pages">
        <router-view></router-view>
      </div>
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
.wrap, .pages {
  margin: 0 auto;
}
.wrap {
  max-width: 732px;
  min-height: calc(100vh - 40px);
  min-width: 432px;
  padding: 0 16px;
  width: 50%;
}
.pages {
  min-height: calc(100vh - 122px);
  width: 100%;
}
</style>
