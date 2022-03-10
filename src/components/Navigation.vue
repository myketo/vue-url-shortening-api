<template>
  <nav class="main-nav">
    <img src="@/assets/images/logo.svg" alt="Shortly logo" class="logo" />

    <hamburger-menu v-model:showNav="showNav" v-if="isMobile"></hamburger-menu>

    <div class="nav-items-container" :class="{ active: showNav }">
      <ul class="nav-items">
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Resources</a></li>
      </ul>

      <ul class="nav-account-buttons">
        <li><a href="#">Login</a></li>
        <li><rounded-button>Sign Up</rounded-button></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import HamburgerMenu from "./HamburgerMenu.vue";
import RoundedButton from "./RoundedButton.vue";
export default {
  name: "Navigation",

  data() {
    return {
      showNav: false,
    };
  },

  components: {
    HamburgerMenu,
    RoundedButton,
  },
};
</script>

<style lang="scss">
.main-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 1.25em;

  .nav-items-container {
    width: 87%;
    background: $dark-violet;
    position: absolute;
    top: 4em;
    left: 50%;
    transform: translateX(-50%);
    display: none;
    border-radius: 0.5em;
    padding: 1.25em 0;

    &.active {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .nav-items,
    .nav-account-buttons {
      list-style-type: none;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 90%;

      li {
        margin: 1em 0;
        width: 100%;
        text-align: center;

        a {
          color: #fff;
          font-weight: $font-weight-bold;
          width: inherit;
        }
      }
    }

    .nav-items {
      border-bottom: 1px solid #564d6b;
      padding-bottom: 1em;
    }

    .nav-account-buttons {
      padding-top: 1em;
    }
  }
}
</style>
