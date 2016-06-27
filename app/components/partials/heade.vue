<style lang="scss">

  $primary: #38b48d;
  $secondary: #1a2940;

  @mixin fontview {
    font-family: 'Catamaran', sans-serif;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
  }

  .description {
    font-size: 60px;
    font-weight: lighter;
    text-align: center;
    margin-top: 230px;
    color: #fff;
    @include fontview;

    .highlight01, .highlight02 {
      color: $primary;
    }
  }

  .bg-header {
    position: absolute;
    top: 0;
    width: 100%;
    height: 800px;
    z-index: -99999;
    background-color: $secondary;
  }
</style>

<template>
  <div class="Heade">
    <h1 class="description container">Sed <span class="highlight01">magna</span> nulla, <span class="highlight02">tempor vitae</span> lorem eleifend, tempus porttitor velit nam pellentesque
consectetur adipiscil</h1>
    <div class="bg-header"></div>
  </div>
</template>

<script>
  // JS HERE
  export default {
  };
</script>
