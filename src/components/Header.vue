<template>
  <div class="flex align-items-center noselect header">
    <div class="navigation-element">
      <router-link
        class="link"
        to="/"
      >
        <img
          alt="Logo"
          class="image"
          src="../assets/logo.png"
        />
      </router-link>
    </div>
    <div class="navigation-element">
      <router-link
        exact-active-class="active"
        class="link"
        to="/"
      >
        Create
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
  height: 50px;
  margin: 16px 0;
}
.navigation-element {
  padding: 0 16px;
}
.link {
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-bottom 250ms ease-in-out;
}
.link:hover {
  border-bottom: 2px solid rgb(43, 134, 146);
  transition: border-bottom 250ms ease-in-out;
}
.image {
  height: 48px;
  width: 50px;
}
.active {
  border-bottom: 2px solid rgb(43, 134, 146);
  transition: border-bottom 250ms ease-in-out;
}
</style>
