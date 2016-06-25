<style lang="scss">

  // css

</style>

<template>

  <div class="Home">
    <navigation></navigation>
    <header></header>
    <!-- html -->

  </div>

</template>

<script>
  import Navigation from 'components/partials/navigation.vue';
  import CustomHeader from 'components/partials/custom-header.vue';
  export default {
    data() {
      return {
        msg: 'My profile',
      };
    },
    components: {
      'navigation': Navigation,
      'custom-header': CustomHeader,
    }
  };
</script>
