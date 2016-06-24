<style lang="scss">

  .Profile {
    width: 100%;
  }

  .Profile-header {
    font-size: 28px;
    color: #fff;
  }

  .Profile-list {
    width: 300px;
    list-style: none;
  }

  .Profile-listItem {
    padding: 10px 0;

    font-size: 20px;
    color: green;
  }

</style>

<template>

  <div class="Profile">
    <h1 class="Profile-header">{{msg}}</h1>
    <user-badge no-logout="true"></user-badge>
    <div class="Profile-content">
      <ul class="Profile-list">
        <li class="Profile-listItem">What the fuck</li>
        <li class="Profile-listItem">The fuck what</li>
        <li class="Profile-listItem">Fuck what the</li>
      </ul>
    </div>
  </div>

</template>

<script>
  import userBadge from 'components/partials/userBadge.vue';
  export default {
    data() {
      return {
        msg: 'My profile',
      };
    },
    components: {
      'user-badge': userBadge,
    }
  };
</script>
