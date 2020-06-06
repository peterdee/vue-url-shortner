<template>
  <div class="flex direction-column about">
    <div class="title noselect">
      About
    </div>
    <div class="margin-top">
      This project implements the following stack: <a
        href="https://deno.land"
      >Deno</a>, <a href="https://github.com/sholladay/pogo">Pogo</a>, <a
        href="https://www.mongodb.com/">MongoDB</a> and <a href="https://vuejs.org">Vue</a>.
    </div>
    <div class="margin-top">
      Project database is hosted on the <a href="https://www.clever-cloud.com/">Clever Cloud</a>.
    </div>
    <div class="margin-top">
      Staging environment is hosted on <a href="https://www.heroku.com/">Heroku</a>.
    </div>
    <div class="margin-top">
      Backend repository link: <a
        href="https://github.com/peterdee/deno-url-shortner"
      >https://github.com/peterdee/deno-url-shortner</a>
    </div>
    <div class="margin-top">
      Frontend repository link: <a
        href="https://github.com/peterdee/vue-url-shortner"
      >https://github.com/peterdee/vue-url-shortner</a>
    </div>
    <div class="margin-top noselect">
      <a href="https://github.com/peterdee">Peter Dyumin</a>, 2020.
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
.about {
  padding: 16px;
}
.title {
  color: rgb(43, 134, 146);
  font-size: 24px;
  font-weight: 100;
}
</style>
