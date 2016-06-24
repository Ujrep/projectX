<style lang="scss">

  .Home {
    width: 100%;
  }

  .Home-header {
    font-size: 28px;
    color: #fff;
  }

  .Home-list {
    width: 300px;
    list-style: none;
  }

  .Home-listItem {
    padding: 10px 0;

    font-size: 20px;
    color: green;
  }

</style>

<template>

  <div class="Home">
    <h1 class="Home-header">{{msg}}</h1>
    <navigation></navigation>
    <div class="Home-content">
      <ul class="Home-list">
        <li class="Home-listItem">What the fuck</li>
        <li class="Home-listItem">The fuck what</li>
        <li class="Home-listItem">Fuck what the</li>
      </ul>
    </div>
  </div>

</template>

<script>
  import Navigation from 'components/partials/navigation.vue';
  export default {
    data() {
      return {
        msg: 'My profile',
      };
    },
    components: {
      'navigation': Navigation,
    }
  };
</script>
