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

  .Card {
    position: relative;
  }

  .bg-card {
    position: relative;
    height: 440px;
    background-color: #fff;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);

    &::before {
      content: "";
      position: absolute;
      top: -10px;
      left: 50%;
      width: 85%;
      height: 10px;
      transform: translateX(-50%);
      background-color: $primary;
    }

    &::after {
      content: "";
      position: absolute;
      top: 440px;
      left: 50%;
      width: 85%;
      height: 10px;
      transform: translateX(-50%);
      background-color: $primary;
    }

    img {
      width: 100%;
      height: 190px;
      border: none;
      background-color: $lightGrey;
    }
  }

  h4 {
    font-size: 30px;
    font-weight: 200;
    color: $darkGrey;
    padding: 40px 30px 0;
    margin: 0;
    @include fontview;
  }

  .location {
    font-size: 16px;
    color: $lightGrey;
    padding: 0 30px 0;
    @include fontview;
  }

  .timeline {
    font-size: 16px;
    margin-top: 10px;
    margin-left: 20px;
    color: $lightGrey;
    @include fontview;

    li {
      margin-left: -10px;
      padding-top: 0;
    }
  }
</style>

<template>
  <div class="Card col-md-4">
    <div class="bg-card">
      <img src="" alt=""/>
      <h4>Adrian Stoian</h4>
      <p class="location">Bucharest, Ro.</p>
      <ul class="timeline">
        <li>Visual Designer: <b>Kalon Global Group</b></p>
        <li>UX / UI Designer: <b>GoldFishBrain</b></p>
        <li>Personal Projects: <b>ThemeForest</b></p>
        <li>Freelance: <b>2008 - Present</b></p>
      </ul>
    </div>
  </div>
</template>

<script>
  // JS HERE
  export default {
  };
</script>
