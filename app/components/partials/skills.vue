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

  ul {
    list-style: none;
  }

</style>

<template>
  <div class="Skills col-md-8">
    <ul class="my-skills col-md-offset-2">
      <li class="ux col-md-1">
        <h5>UX / UI</h5>
      </li>
    </ul>
  </div>
</template>

<script>
  // JS HERE
  export default {
  };
</script>
