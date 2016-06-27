<style lang="scss">

  $primary: #38b48d;
  $secondary: #1a2940;

  @mixin gradient {
    background: -webkit-linear-gradient(50deg,#0f1b2a, #1a2940);
    background: linear-gradient(50deg,#0f1b2a, #1a2940);
  }

  @mixin fontview {
    font-family: 'Catamaran', sans-serif;
    font-weight: normal;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
  }

  @mixin headlineView {
    font-family: 'Catamaran', sans-serif;
    font-size: 40px;
    font-weight: lighter;
    color: $primary;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
  }

  h2 {
    margin-top: 100px;
    text-align: center;
    @include headlineView;
  }

  h3 {
    font-size: 16px;
    text-align: center;
    @include fontview;
  }

  .bg-about {
    display: block;
    width: 100%;
    height: 990px;
    z-index: -99999;
    margin-top: -290px;
    @include gradient;
  }
</style>

<template>
  <div class="About">
    <div class"row"
      <div class="container">
        <h2>About Me</h2>
        <h3>llentesque sit amet ex vel ante fringilla fringilla. Praesent non tristique dolor.</h3>
      </div>
    </div>
    <div class="bg-about"></div>
  </div>
</template>

<script>
  // JS HERE
  export default {
  };
</script>
