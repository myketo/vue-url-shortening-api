<template>
  <div class="section">
    <div class="shorten-link-container">
      <input
        type="text"
        placeholder="Shorten a link here..."
        class="link-input"
      />

      <button class="shorten-btn">Shorten it!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShortenLink",
};
</script>

<style lang="scss">
.shorten-link-container {
  margin: 5em 0;
  display: flex;
  flex-direction: column;
  background-color: $dark-violet;
  background-image: url("../assets/images/bg-shorten-mobile.svg");
  background-repeat: no-repeat;
  background-position: right top;
  padding: 1.25em;
  border-radius: 0.6em;

  .link-input {
    padding: 0.6em 0.8em;
    border-radius: 0.4em;
    font-size: 0.95em;

    &::placeholder {
      color: $grayish-violet;
    }
  }

  .shorten-btn {
    margin-top: 0.8em;
    border: none;
    color: #fff;
    font-weight: $font-weight-bold;
    background: $cyan;
    padding: 0.9em 0;
    border-radius: 0.4em;
  }
}
</style>
