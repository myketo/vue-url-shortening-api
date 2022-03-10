<template>
  <section class="advanced-statistics-container">
    <h2 class="statistics-header">Advanced Statistics</h2>
    <p class="statistics-paragraph">
      Track how your links are performing across the web with our advanced
      statistics dashboard.
    </p>

    <div class="benefit-list">
      <benefit-item title="Brand Recognition">
        Boost your brand recognition with each click. Generic links don't mean a
        thing. Branded links help instil confidence in your content.
      </benefit-item>
      <span class="stick stick--vertical"></span>
      <benefit-item title="Detailed Records">
        Gain insights into who is clicking your links. Knowing when and where
        people engage with your content helps inform better decisions.
      </benefit-item>
      <span class="stick stick--vertical"></span>
      <benefit-item title="Fully Customizable">
        Improve brand awareness and content discoverability through customizable
        links, supercharging audience engagement.
      </benefit-item>
    </div>
  </section>
</template>

<script>
import BenefitItem from "./BenefitItem.vue";
export default {
  name: "AdvancedStatistics",
  components: {
    BenefitItem,
  },
};
</script>

<style lang="scss">
.advanced-statistics-container {
  text-align: center;
  background-color: hsl(0, 0, 0, 5%);
  padding: 9.5em 1.3em 5em 1.3em;
  margin-top: -9.5em;

  .statistics-header {
    font-size: 1.5em;
    font-weight: $font-weight-bold;
    color: $very-dark-blue;
  }

  .statistics-paragraph {
    margin-top: 1.5em;
    color: $grayish-violet;
    line-height: 1.75;
  }

  .benefit-list {
    display: flex;
    flex-direction: column;
    margin-top: 5em;

    .stick {
      width: 0.45em;
      height: 5em;
      background-color: $cyan;
      margin: 0 auto;
    }
  }
}
</style>
