<style lang="scss">
$green: #38b48d;
  .Navigation {
    position: fixed;
    top: 0;
  }

  .logo {
    font-family: 'Catamaran', sans-serif;
    font-weight: normal;
    font-size: 25px;
    margin-top: 40px;
  }

  .buttons {
    float: right;
    font-family: 'Catamaran', sans-serif;
    font-weight: normal;
    font-size: 16px;
    list-style: none;
    padding-top: 40px;

    li {
      display: inline-block;
      padding-left: 40px;
      color: red;

      a {
        color: red;
        text-decoration: none;
      }

      &:first-child {
        padding-left: 0;
      }

      &:nth-child(4) {
        color: blue;
        padding-right: 40px;
      }

      &:last-child {
        font-family: 'Catamaran', sans-serif;
        font-weight: bold;
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        color: #fff;
        border-radius: 10cm;
        padding: 0 20px;
        margin: 0;
        text-transform: uppercase;
        background-color: $green;
      }
    }
  }

  @mixin fontview {
    font-family: 'Catamaran', sans-serif;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
  }

  $primary: #38b48d;

  .logo {
    font-family: 'Catamaran', sans-serif;
    font-weight: normal;
    font-size: 25px;
    color: #fff;
    margin-top: 30px;
    padding-left: 0;
    @include fontview;
  }

  .buttons {
    font-size: 16px;
    list-style: none;
    @include fontview;

    li {
      display: inline-block;
      padding-left: 40px;
      margin-top: 30px;

      &:last-child {
        height: 40px;
        line-height: 41px;
        padding: 0px 20px;
        margin-left: 20px;
        font-weight: bold;
        border-radius: 10cm;
        background-color: $primary;
      }
    }

    a {
      color: #fff;
      text-transform: uppercase;;
      text-decoration: none;
    }
  }

</style>

<template>
  <div class="Navigation container">
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
</template>

<script>
  // JS HERE
  export default {
  };
</script>
