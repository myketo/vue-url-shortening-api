<template>
  <nav class="main-nav">
    <img src="@/assets/images/logo.svg" alt="Shortly logo" class="logo" />

    <hamburger-menu></hamburger-menu>

    <ul class="nav-items">
      <li><a href="#">Features</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Resources</a></li>
    </ul>
  </nav>
</template>

<script>
import HamburgerMenu from "./HamburgerMenu.vue";
export default {
  name: "Navigation",

  components: {
    HamburgerMenu,
  },
};
</script>

<style lang="scss">
.main-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 1.25em;

  .nav-items {
    list-style-type: none;
    display: none;
  }
}
</style>
