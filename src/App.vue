<template>
  <navigation></navigation>

  <section class="top-section">
    <div class="worker-img"></div>

    <div class="page-description section">
      <h1 class="description-header">More than just shorter links</h1>
      <p class="description-paragraph">
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </p>
      <get-started-button></get-started-button>
    </div>
  </section>

  <shorten-link></shorten-link>

  <advanced-statistics></advanced-statistics>

  <section class="boost-your-links section">
    <h2 class="boost-header">Boost your links today</h2>
    <get-started-button></get-started-button>
  </section>

  <page-footer></page-footer>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import GetStartedButton from "./components/GetStartedButton.vue";
import ShortenLink from "./components/ShortenLink.vue";
import AdvancedStatistics from "./components/AdvancedStatistics.vue";
import PageFooter from "./components/PageFooter.vue";
export default {
  name: "App",
  components: {
    Navigation,
    GetStartedButton,
    ShortenLink,
    AdvancedStatistics,
    PageFooter,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap");

*,
* > * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1;
  font-family: $font-family;
  font-weight: $font-weight-normal;
  font-size: $font-size;
}

a {
  text-decoration: none;
  color: $grayish-violet;
}

.section {
  padding: 0 1.3em;
}

.top-section {
  overflow: hidden;

  .worker-img {
    width: 100%;
    height: 18em;
    background-image: url("assets/images/illustration-working.svg");
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 1.5em;
  }

  .page-description {
    margin-top: 2.25em;
    text-align: center;

    .description-header {
      font-size: 2.25em;
      line-height: 1.25;
      font-weight: $font-weight-bold;
      color: $very-dark-blue;
    }

    .description-paragraph {
      line-height: 1.75;
      color: $grayish-violet;
      margin: 1em 0 1.75em 0;
    }
  }
}

.boost-your-links {
  background-image: url("assets/images/bg-boost-mobile.svg");
  background-repeat: no-repeat;
  background-color: $dark-violet;
  text-align: center;
  padding: 5em 0;

  .boost-header {
    font-size: 1.5em;
    font-weight: $font-weight-bold;
    color: #fff;
    margin-bottom: 1em;
  }
}
</style>
