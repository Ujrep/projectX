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

    .my-skills {
      padding-top: 60px;
    }

    .ux {
      position: relative;
      width: 70px;
      height: 380px;
      padding: 0;
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
      position: relative;
      width: 70px;
      height: 380px;
      padding: 0;
      background-color: none ;

      & span {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 95%;
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
      position: relative;
      width: 70px;
      height: 380px;
      padding: 0;
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
        <div class="col-md-offset-3 col-md-2">
          <div class="ux">
            <span></span>
          </div>
        </div>
        <div class="col-md-2">
          <div class="mobile">
            <span></span>
          </div>
        </div>
        <div class="col-md-2">
          <div class="motion">
            <span></span>
          </div>
        </div>
        <div class="col-md-2">
          <div class="html">
            <span></span>
          </div>
        </div>
        <div class="col-md-2">
          <div class="branding">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // JS HERE
  export default {
  };
</script>
