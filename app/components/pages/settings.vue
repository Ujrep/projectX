<style lang="scss">
  // testing sass
  $color: blue;
  .blue {
    color: $color;
  }
</style>

<template>
  <h1 class="blue">{{msg}}</h1>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'My Settings',
      };
    },
  };
</script>
