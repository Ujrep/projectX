<style lang="scss">

  $primary: #38b48d;
  $secondary: #1a2940;
  $darkGrey: #3d3d3d;
  $lightGrey: #787878;
  $yellow: #e4c94b;

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
      padding-left: 250px;
    }

    .notLoaded {
      .line span {
        height: 0;
      }
    }

    .line {
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
        transition: all 1s linear;

        &:before {
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

    .ux {
      & span {
        background-color: #e4c94b;
        &:before {
          content: 'UX / UI';
        }
      }

      .printScreen {
        background-image: url('/app/common/images/adrian.jpg');
        width: 300px;
        height: 400px;
        background-size: cover;
        position: absolute;
        margin-top: 30px;
      }

      h4 {
        position: absolute;
        left: -150px;
        bottom: -20px;
      }

      .path-first {
        width: 400px;
        height: 100px;

        border-right: 2px solid $yellow;
        border-bottom: 2px solid $yellow;
      }

      .path-second {
        width: 2px;
        height: 0px;
      }
    }

    .mobile {
      & span {
        background-color: #4ccea8;
        margin-right: 30px;
        height: 95%;
        &:before {
          content: 'Mobile Design';
          top: -40px;
        }
      }

      .path {
        &:before {
          border: 2px solid #4ccea8;
        }
      }

      .path-first {
        width: 50px;
        height: 200px;

        border-right: 2px solid #4ccea8;
        border-bottom: 2px solid #4ccea8;
      }

      .path-second {
        width: 2px;
        height: 150px;

        border-left: 2px solid #4ccea8;
      }

    }

    .motion {
      & span {
        background-color: #5099b4;
        height: 80%;
        &:before {
          content: 'Motion & Interaction';
          top: -40px;
        }
      }

      .path {
        &:before {
          border: 2px solid #5099b4;
        }
      }

      .path-first {
        width: 200px;
        height: 250px;

        border-right: 2px solid #5099b4;
        border-bottom: 2px solid #5099b4;
      }

      .path-second {
        width: 200px;
        height: 300px;

        border-left: 2px solid #5099b4;
      }
    }

    .html {
      & span {
        background-color: #a785bd;
        height: 65%;

        &:before {
          content: 'HTML / CSS';
        }
      }

      .path {
        &:before {
          border: 2px solid #a785bd;
        }
      }

      .path-first {
        width: 100px;
        height: 600px;

        border-right: 2px solid #a785bd;
        border-bottom: 2px solid #a785bd;
      }

      .path-second {
        width: 100px;
        height: 200px;

        border-left: 2px solid #a785bd;
      }
    }

    .branding {
      & span {
        background-color: #da77ab;
        height: 80%;

        &:before {
          content: 'Branding';
        }
      }

      .path {
        &:before {
          border: 2px solid #da77ab;
        }
      }

      .path-first {
        width: 300px;
        height: 150px;

        border-right: 2px solid #da77ab;
        border-bottom: 2px solid #da77ab;
      }

      .path-second {
        width: 200px;
        height: 300px;

        border-left: 2px solid #da77ab;
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

  .paths {
    position: absolute;
    bottom: -20px;
    right: 50%;

    transform: translateY(100%);
  }

  .path {
    &:before {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      border: 2px solid $yellow;

      border-radius: 50%;
    }

    &.top-right {
      &:before {
        top: -8px;
        right: -4px;
      }
    }
    &.top-left {
      &:before {
        top: -8px;
        left: -4px;
      }
    }
    &.bottom-right {
      &:before {
        bottom: -8px;
        right: -4px;
      }
    }
    &.bottom-left {
      &:before {
        bottom: -8px;
        left: -4px;
      }
    }
  }

</style>

<template>
  <div class="Skills">
    <div class="my-skills col-md-8">
      <div class="row relative notLoaded">
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
        <div class="line ux">
          <span></span>
          <div class="paths">
            <div class="path path-first top-right">
            </div>
            <div class="path path-second bottom-left">
            </div>
            <h4>UX / UI</h4>
            <div class="printScreen"></div>
          </div>
        </div>
        <div class="line mobile">
          <span></span>
          <div class="paths">
            <div class="path path-first bottom-left">
            </div>
            <div class="path path-second top-right">
            </div>
          </div>
        </div>
        <div class="line motion">
          <span></span>
          <div class="paths">
            <div class="path path-first bottom-left">
            </div>
            <div class="path path-second top-right">
            </div>
          </div>
        </div>
        <div class="line html">
          <span></span>
          <div class="paths">
            <div class="path path-first bottom-left">
            </div>
            <div class="path path-second top-right">
            </div>
          </div>
        </div>
        <div class="line branding">
          <span></span>
          <div class="paths">
            <div class="path path-first bottom-left">
            </div>
            <div class="path path-second top-right">
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        scrolledIntoView: false
      }
    },
    methods: {
      checkElementVisibility() {
        var el = $('.notLoaded');

        $(document).on("scroll", () => {
          if (this.isScrolledIntoView(el) && el.hasClass('notLoaded')) {
            el.removeClass('notLoaded');
          }
        });
      },
      isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop(),
        	  docViewBottom = docViewTop + $(window).height(),
        	  elemTop = $(elem).offset().top,
            elemBottom = elemTop + $(elem).height();
       return ((elemTop + ((elemBottom - elemTop)/2)) >= docViewTop && ((elemTop + ((elemBottom - elemTop)/2)) <= docViewBottom));
      }
    },
    ready() {
      this.checkElementVisibility();
    }
  };
</script>
