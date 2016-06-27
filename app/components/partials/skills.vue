<style lang="scss">

  $primary: #38b48d;
  $secondary: #1a2940;
  $darkGrey: #3d3d3d;
  $lightGrey: #787878;

  @mixin fontview {
    font-family: 'Catamaran', sans-serif;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
  }

  .Skills {
    position: relative;
    top: -820px;
    list-style: none;

    .ux {
      position: relative;
      height: 380px;
      background-color: #e4c94b;

      & h5 {
        position: absolute;
        top: -40px;
        width: 65px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        @include fontview;
      }
    }

    .mobile {
      position: relative;
      height: 380px;
      background-color: #e4c94b;

      & h5 {
        position: absolute;
        top: -40px;
        width: 65px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        @include fontview;
      }
    }
  }

</style>

<template>
  <div class="Skills container col-md-offset-6">
    <div class="row col-md-1 col-md-offset-1">
        <li class="ux">
          <h5>UX / UI</h5>
        </li>
    </div>
    <div class="row col-md-1">
        <li class="mobile">
          <h5>Mobile</h5>
        </li>
    </div>
  </div>
</template>

<script>
  // JS HERE
  export default {
  };
</script>
