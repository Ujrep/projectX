<style lang="scss">

  $primary: #38b48d;
  $secondary: #1a2940;
  $darkGrey: #3d3d3d;
  $lightGrey: #787878;

  @mixin fontView {
    font-family: 'Catamaran', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
  }

  @mixin fontRoboto {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 14px;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
  }


  .Skills {
    position: relative;

    .my-skills {
      padding-top: 170px;
      padding-left: 322px;
    }

    .ux {
      float: left;
      position: relative;
      width: 70px;
      height: 380px;
      margin-right: 27px;
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
          @include fontView;
        }
      }
    }

    .mobile {
      float: left;
      position: relative;
      width: 70px;
      height: 380px;
      margin-right: 27px;
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
          @include fontView;
        }
      }
    }

    .motion {
      float: left;
      position: relative;
      width: 70px;
      height: 380px;
      margin-right: 27px;
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
          @include fontView;
        }
      }
    }

    .html {
      float: left;
      position: relative;
      width: 70px;
      height: 380px;
      margin-right: 27px;
      background-color: none ;

      & span {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 65%;
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
          @include fontView;
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
          @include fontView;
        }
      }
    }
  }

  .relative {
    position: relative;
  }

  .lines {
    position: absolute;
    width: 105%;
    height: 100%;
    top: 0;
    left: -40px;

    & span {
      position: relative;
      display: block;
      height: 50px;
      border-top: 1px dashed rgba(255, 255, 255, 0.1);

      &::before {
        content: "";
        position: absolute;
        left: -50px;
        top: -10px;
      }

      &:nth-child(1) {
        &::before {
          content: "100%";
          color: #fff;
          @include fontRoboto;
        }
      }

      &:nth-child(3) {
        &::before {
          content: "75%";
          @include fontRoboto;
        }
      }

      &:nth-child(5) {
        &::before {
          content: "50%";
          @include fontRoboto;
        }
      }

      &:nth-child(7) {
        &::before {
          content: "25%";
          @include fontRoboto;
        }
      }
    }
  }

</style>

<template>
  <div class="Skills">
    <div class="my-skills col-md-8">
      <div class="row relative">
        <div class="lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
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
