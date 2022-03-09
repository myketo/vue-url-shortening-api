<template>
  <div
    class="hamburger-menu"
    @click="toggleNavigation"
    :class="{ active: isHamburgerActive }"
  >
    <span class="line line1"></span>
    <span class="line line2"></span>
    <span class="line line3"></span>
  </div>
</template>

<script>
export default {
  name: "HamburgerMenu",

  data() {
    return {
      isHamburgerActive: false,
    };
  },

  methods: {
    toggleNavigation() {
      this.isHamburgerActive = !this.isHamburgerActive;
      this.$emit("clicked", this.isHamburgerActive);
    },
  },
};
</script>

<style lang="scss">
.hamburger-menu {
  width: 1.75em;
  height: 1.4em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .line {
    display: block;
    width: 100%;
    height: 0.175em;
    background: $grayish-violet;

    &.line1 {
      transform-origin: 0% 0%;
      transition: transform 0.3s ease-in-out;
    }

    &.line2 {
      transition: transform 0.1s ease-in-out;
    }

    &.line3 {
      transform-origin: 0% 100%;
      transition: transform 0.3s ease-in-out;
    }
  }

  &.active {
    .line {
      &.line1 {
        transform: rotate(45deg);
      }

      &.line2 {
        transform: scaleY(0);
      }

      &.line3 {
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
