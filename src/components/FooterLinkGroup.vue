<template>
  <div class="footer-link-group">
    <h3 class="link-group-header">{{ title }}</h3>

    <ul class="links">
      <li v-for="link in links" :key="link" class="link">{{ link }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterLinkGroup",
  props: {
    title: String,
    links: Array,
  },
};
</script>

<style lang="scss">
.footer-link-group {
  color: #fff;
  text-align: center;
  margin: 3em 0;

  .link-group-header {
    font-weight: $font-weight-bold;
    color: #fff;
  }

  .links {
    list-style-type: none;
    color: $grayish-violet;
    margin-top: 1.5em;

    .link {
      margin: 1em;
    }
  }
}
</style>
