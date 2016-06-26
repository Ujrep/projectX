<style lang="scss">

  // css

</style>

<template>

  <div class="Home">
    <navigation></navigation>
    <header></header>
    <heade></heade>
    <portfolio></portfolio>
    <about></about>
    <card></card>
    <!-- html -->

  </div>

</template>

<script>
  import Navigation from 'components/partials/navigation.vue';
  import Heade from 'components/partials/heade.vue';
  import Portfolio from 'components/partials/portfolio.vue';
  import About from 'components/partials/about.vue';
  import Card from 'components/partials/card.vue';
  export default {
    data() {
      return {
        msg: 'My profile',
      };
    },
    components: {
      'navigation': Navigation,
      'heade': Heade,
      'portfolio': Portfolio,
      'about': About,
      'card': Card,
    }
  };
</script>
