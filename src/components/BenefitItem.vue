<template>
  <div class="benefit-item section">
    <div class="icon-container">
      <img :src="icon" :alt="title + ' section icon'" class="benefit-icon" />
    </div>
    <h3 class="benefit-header">{{ title }}</h3>
    <p class="benefit-paragraph">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "BenefitItem",
  props: {
    title: String,
  },
  data() {
    return {
      icon: "",
    };
  },

  methods: {
    getIcon() {
      var iconName = "icon-";
      iconName += this.title.toLowerCase().replace(" ", "-");
      iconName += ".svg";

      var iconPath = require("../assets/images/" + iconName);

      return iconPath;
    },
  },

  created() {
    this.icon = this.getIcon();
  },
};
</script>

<style lang="scss">
.benefit-item {
  background-color: #fff;

  .icon-container {
    border-radius: 100%;
    padding: 1.1em;
    overflow: hidden;
    background-color: $dark-violet;
    width: fit-content;
    margin: -2.25em auto 0 auto;
    display: grid;
    place-items: center;
  }

  .benefit-header {
    font-size: 1.25em;
    font-weight: $font-weight-bold;
    color: $very-dark-blue;
    margin-top: 2em;
  }

  .benefit-paragraph {
    font-size: 0.9em;
    line-height: 1.75;
    color: $grayish-violet;
    margin: 2em 0;
  }
}
</style>
