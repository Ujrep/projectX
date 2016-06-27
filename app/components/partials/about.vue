<style lang="scss">

  $primary: #38b48d;
  $secondary: #1a2940;

  @mixin gradient {
    background: -webkit-linear-gradient(50deg,#0f1b2a, #1a2940);
    background: linear-gradient(50deg,#0f1b2a, #1a2940);
  }

  @mixin fontView {
    font-family: 'Catamaran', sans-serif;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
  }

  @mixin headlineView {
    font-family: 'Catamaran', sans-serif;
    font-size: 40px;
    font-weight: 100;
    color: $primary;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
  }

  .About {
    position: relative;
    @include gradient;
    margin-top: -120px;
    z-index: -2;
  }

  .about-title {
    margin: 0 0 100px 0;

    h2 {
      padding-top: 200px;
      text-align: center;
      @include headlineView;
    }

    h3 {
      font-size: 16px;
      font-weight: normal;
      text-align: center;
      margin-top: 0;
      @include fontView;
    }
  }
</style>

<template>
  <div class="About">
    <div class="container">
      <div class="row">
      <div class="about-title">
        <h2>About Me</h2>
        <h3>llentesque sit amet ex vel ante fringilla fringilla. Praesent non tristique dolor.</h3>
      </div>
      <card></card>
      <skills></skills>
    </div>
    </div>
  </div>
</template>

<script>
  import Card from 'components/partials/card.vue';
  import Skills from 'components/partials/skills.vue';

  // JS HERE
  export default {
    components: {
      'card': Card,
      'skills': Skills
    }
  };
</script>
