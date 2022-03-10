<template>
  <a href="#" class="rounded-btn"><slot></slot></a>
</template>

<script>
export default {
  name: "RoundedButton",
};
</script>

<style lang="scss">
.rounded-btn {
  background: $cyan;
  color: #fff;
  padding: 1em 2.25em;
  border-radius: 2em;
  font-weight: $font-weight-bold;
  display: inline-block;
}
</style>
