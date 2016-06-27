<style lang="scss">

  $primary: #38b48d;

  @mixin gradient {
    background: -webkit-linear-gradient(50deg,#0f1b2a, #1a2940);
    background: linear-gradient(50deg,#0f1b2a, #1a2940);
  }

  @mixin fontView {
    font-family: 'Catamaran', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
  }

  .Reviews {
    position: relative;
    width: 100%;
    height: 100%;
    @include gradient;
  }

  .slider {
    margin-top: 100px;
    list-style: none;

    .avatar {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      background-color: #fff;
      margin: 0 auto;
    }
  }

  .feed01 {
    & h5 {
      font-size: 20px;
      text-align: center;
      line-height: 30px;
      color: #fff;
      margin-top: 40px;
      @include fontView;

      &::after {
        display: block;
        content: "";
        width: 150px;
        height: 1px;
        margin: 0 auto;
        margin-top: 26px;
        background-color: $primary;
      }
    }

    & h6 {
      font-weight: 700;
      font-size: 20px;
      text-align: center;
      color: #fff;
      margin: 26px 0 0;
      @include fontView;
    }

    & p {
      font-weight: 700;
      font-size: 14px;
      color: $primary;
      text-align: center;
      margin-top: 0;
      padding-bottom: 90px;
      @include fontView;
    }
  }

  .arrow-left {
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    margin-left: 5%;
    background-color: $primary;
  }

  .arrow-right {
    position: absolute;
    top: 50%;
    left: 93%;
    width: 50px;
    height: 50px;
    background-color: $primary;
  }
</style>

<template>
  <div class="Reviews">
    <div class="container-fluid">
      <div class="arrow-right"></div>
      <div class="arrow-left"></div>
    </div>
    <div class="container">
      <div class="row col-md-12">
        <ul class="slider">
          <li class="feed01">
            <div class="avatar"></div>
            <h5>Working with Adrian Stoian during the development of Sportonomy was a blessing.  His passion to his craft was only surpassed by the quality of his work.  We appreciated so much his creativity and inventiveness that allowed Sportonomy to truly come to life.  He went out of his way to make sure our needs were met and that is something we at Sportonomy truly value. 
    We look forward to our next opportunity to work with Adrian.</h5>
            <h6>Josh Racette</h6>
            <p>Sportonomy</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  // JS HERE
  export default {
  };
</script>
