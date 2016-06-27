<style lang="scss">

  // css

</style>

<template>

  <div class="Home">
    <navigation></navigation>
    <custom-header></custom-header>
    <!-- html -->

  </div>

</template>

<script>
  import Navigation from 'components/partials/navigation.vue';
  import Header from 'components/partials/header.vue';
  export default {
    data() {
      return {
        msg: 'My profile',
      };
    },
    components: {
      'navigation': Navigation,
      'custom-header': Header,
    }
  };
</script>
