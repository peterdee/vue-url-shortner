<template>
  <div class="flex noselect header">
    <div class="navigation-element">
      <router-link
        exact-active-class="active"
        class="link"
        to="/"
      >
        Index
      </router-link>
    </div>
    <div class="navigation-element">
      <router-link
        active-class="active"
        class="link"
        to="/manage"
      >
        Manage
      </router-link>
    </div>
    <div class="navigation-element">
      <router-link
        active-class="active"
        class="link"
        to="/about"
      >
        About
      </router-link>
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
  font-size: 20px;
  font-weight: 100;
  margin-top: 16px;
}
.navigation-element {
  padding: 16px;
}
.link, link:hover {
  text-decoration: none;
}
.active {
  border-bottom: 2px solid rgb(43, 134, 146);
}
</style>
