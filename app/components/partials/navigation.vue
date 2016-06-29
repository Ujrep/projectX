<style lang="scss">

$primary: #38b48d;

@mixin fontView {
  font-family: 'Catamaran', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
}


.logo {
    font-weight: normal;
    font-size: 25px;
    color: #fff;
    margin-top: 30px;
    padding-left: 0;
    @include fontView;
  }

  .buttons {
    font-size: 16px;
    list-style: none;
    @include fontView;

    li {
      display: inline-block;
      padding-left: 40px;
      margin-top: 40px;

      &:last-child {
        & a {
          padding: 5px 20px;
          font-weight: bold;
          border-radius: 10cm;
          background-color: $primary;
        }
      }
    }

    a {
      color: #fff;
      text-transform: uppercase;;
      text-decoration: none;
    }
  }

  .bg-full {
    width: 100%;
    height: 100px;
    background-color: rgba(26, 41, 64, 0.9);
  }

</style>

<template>
  <div class="Navigation container-fluid navbar-fixed-top">
    <div class="container">
      <div class="logo col-md-2">
        <span>Adrian Stoian</span>
      </div>
      <ul class="buttons pull-right">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Reviews</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  $(document).on("scroll",function(){
    if ($(document).scrollTop() > 150){
      $(".Navigation").addClass("bg-full");
    } else {
      $(".Navigation").removeClass("bg-full");
    }
  });
</script>
