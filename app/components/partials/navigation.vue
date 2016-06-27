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


</style>

<template>
  <div class="Navigation container">
    <div class="logo col-lg-2">
      <span>Adrian Stoian</span>
    </div>
    <ul class="buttons col-lg-6">
      <li>
        <a href="#">Home</a>
      </li>
      <li>Portfolio</li>
      <li>About</li>
      <li>Reviews</li>
      <li class="contact-button">Contact</li>
    </ul>
  </div>
</template>

<script>
  // JS HERE
  export default {
  };
</script>
