<style lang="scss">
  // testing sass
  $color: #ccc;
  .blue {
    color: $color;
  }
</style>

<template>
  <h1 class="blue" id="blue" @click="clicked">{{msg}}</h1>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'I\'m landing page'
      };
    },
    methods: {
      clicked() {
        document.getElementById('blue').innerHTML = 'Pula mea';
        // this.msg = 'Pula mea';
      }
    }

  };
</script>
