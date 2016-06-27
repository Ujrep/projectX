<style lang="scss">
  $yellow: #e4c94b;

  @mixin fontview {
    font-family: 'Catamaran', sans-serif;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
  }

  .Uxs {
    position: relative;

    & h4 {
      width: 270px;
      padding: 135px 0;
      margin: 0;
    }
  }

  .line01 {
    display: block;
    position: absolute;
    top: 30px;
    left: 30%;
    width: 28%;
    height: 122px;
    border-right: 2px solid $yellow;
    border-bottom: 2px solid $yellow;
    border-bottom-right-radius: 10px;
    background-color: none;

    &::after {
      content: "";
      position: absolute;
      top: -10px;
      left: 99.3%;
      width: 10px;
      height: 10px;
      border: 2px solid $yellow;
      border-radius: 50%;
    }

    &::before {
      content: "";
      position: absolute;
      top: 116px;
      left: -10px;
      width: 10px;
      height: 10px;
      border: 2px solid $yellow;
      border-radius: 50%;
    }
  }
</style>

<template>
  <div class="Uxs">
      <div class="container">
        <div class="row">
        <h4>UX / UI Design</h4>
        <div class="line01"></div>
      </div>
    </div>
  </div>
</template>

<script>
  // JS HERE
  export default {
  };
</script>
