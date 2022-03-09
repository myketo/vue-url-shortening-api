<template>
  <footer class="page-footer">
    <img src="@/assets/images/logo.svg" class="footer-logo" />

    <div class="footer-links">
      <footer-link-group
        v-for="linkGroup in linkGroups"
        :key="linkGroup.title"
        :title="linkGroup.title"
        :links="linkGroup.links"
      ></footer-link-group>

      <div class="social-media-links">
        <img
          v-for="socialLink in socialLinks"
          :key="socialLink.src"
          :src="socialLink.src"
          :alt="socialLink.alt"
        />
      </div>
    </div>
  </footer>
</template>

<script>
import FooterLinkGroup from "./FooterLinkGroup.vue";
export default {
  name: "PageFooter",
  components: {
    FooterLinkGroup,
  },
  data() {
    return {
      linkGroups: [
        {
          title: "Features",
          links: ["Link Shortening", "Branded Links", "Analytics"],
        },
        {
          title: "Resources",
          links: ["Blog", "Developers", "Support"],
        },
        {
          title: "Company",
          links: ["About", "Our Team", "Careers", "Contact"],
        },
      ],
      socialLinks: [
        {
          src: require("../assets/images/icon-facebook.svg"),
          alt: "Facebook icon",
        },
        {
          src: require("../assets/images/icon-twitter.svg"),
          alt: "Twitter icon",
        },
        {
          src: require("../assets/images/icon-pinterest.svg"),
          alt: "Pinterest icon",
        },
        {
          src: require("../assets/images/icon-instagram.svg"),
          alt: "Instagram icon",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.page-footer {
  background: $very-dark-violet;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  padding: 3em 0;

  .footer-logo {
    filter: brightness(10);
    margin-bottom: 0.5em;
  }

  .social-media-links {
    display: flex;
    gap: 1.5em;
  }
}
</style>
