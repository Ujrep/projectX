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

    .my-skills {
      padding-top: 60px;
      padding-left: 320px;
    }

    .ux {
      float: left;
      position: relative;
      width: 70px;
      height: 380px;
      margin-right: 30px;
      background-color: none ;

      & span {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 98%;
        background-color: #e4c94b;

        &:before {
          content: 'UX / UI';
          position: absolute;
          top: -30px;
          font-size: 14px;
          width: 100%;
          color: #fff;
          text-align: center;
          text-transform: capitalize;
          @include fontview;
        }
      }
    }

    .mobile {
      float: left;
      position: relative;
      width: 70px;
      height: 380px;
      margin-right: 30px;
      background-color: none ;

      & span {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 95%;
        margin-right: 30px;
        background-color: #4ccea8;

        &:before {
          content: 'Mobile Design';
          position: absolute;
          top: -50px;
          font-size: 14px;
          width: 100%;
          color: #fff;
          text-align: center;
          text-transform: capitalize;
          @include fontview;
        }
      }
    }

    .motion {
      float: left;
      position: relative;
      width: 70px;
      height: 380px;
      margin-right: 30px;
      background-color: none ;

      & span {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 80%;
        background-color: #5099b4;

        &:before {
          content: 'Motion & Interaction';
          position: absolute;
          top: -50px;
          font-size: 14px;
          width: 100%;
          color: #fff;
          text-align: center;
          text-transform: capitalize;
          @include fontview;
        }
      }
    }

    .html {
      float: left;
      position: relative;
      width: 70px;
      height: 380px;
      margin-right: 30px;
      background-color: none ;

      & span {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60%;
        background-color: #a785bd;

        &:before {
          content: 'HTML / CSS';
          position: absolute;
          top: -30px;
          font-size: 14px;
          width: 100%;
          color: #fff;
          text-align: center;
          text-transform: capitalize;
          @include fontview;
        }
      }
    }

    .branding {
      position: relative;
      width: 70px;
      height: 380px;
      padding: 0;
      background-color: none ;

      & span {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 80%;
        background-color: #da77ab;

        &:before {
          content: 'Branding';
          position: absolute;
          top: -30px;
          font-size: 14px;
          width: 100%;
          color: #fff;
          text-align: center;
          text-transform: capitalize;
          @include fontview;
        }
      }
    }
  }

</style>

<template>
  <div class="Skills">
    <div class="my-skills col-md-8">
      <div class="row">
        <div class="ux">
          <span></span>
        </div>
        <div class="mobile">
          <span></span>
        </div>
        <div class="motion">
          <span></span>
        </div>
        <div class="html">
          <span></span>
        </div>
        <div class="branding">
          <span></span>
        </div>
    </div>
  </div>
</template>

<script>
  // JS HERE
  export default {
  };
</script>
