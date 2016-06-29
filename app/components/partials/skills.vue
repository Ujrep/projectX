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
    }

    .html {
      & span {
        background-color: #a785bd;
        height: 65%;

        &:before {
          content: 'HTML / CSS';
        }
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
        </div>
        <div class="line mobile">
          <span></span>
        </div>
        <div class="line motion">
          <span></span>
        </div>
        <div class="line html">
          <span></span>
        </div>
        <div class="line branding">
          <span></span>
        </div>
    </div>
  </div>
</template>

<script>
  // JS HERE
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
          if (this.isScrolledIntoView(el)) {
            el.removeClass('notLoaded');
            $(this).off('scroll');
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
