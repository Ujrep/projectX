<style lang="scss">

  $primary: #38b48d;
  $secondary: #1a2940;
  $darkGrey: #3d3d3d;
  $lightGrey: #787878;

  @mixin gradient {
    background: -webkit-linear-gradient(50deg,#0f1b2a, #1a2940);
    background: linear-gradient(50deg,#0f1b2a, #1a2940);
  }

  @mixin fontView {
    font-family: 'Catamaran', sans-serif;
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

  .contact-title {
    margin: 0 0 100px 0;

    h2 {
      padding-top: 100px;
      text-align: center;
      @include headlineView;
    }

    h3 {
      font-size: 16px;
      font-weight: normal;
      text-align: center;
      color: $lightGrey;
      margin-top: 0;
      @include fontView;
    }
  }

  .input {
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid $primary;
    background-color: none;

    &:focus {
      outline: none;
    }

    & [type=text] {
      padding-left: 0;
    }
  }
</style>

<template>
  <div class="Contact">
    <div class="container">
      <div class="row">
      <div class="contact-title">
        <h2>Contact Me</h2>
        <h3>llentesque sit amet ex vel ante fringilla fringilla. Praesent non tristique dolor.</h3>
      </div>
    </div>
      <div class="form">
        <input class="input name col-md-4" type="text" placeholder="Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Name'" required>
      </div>
    </div>
  </div>
</template>

<script>
  // JS HERE
  export default {
  };
</script>
