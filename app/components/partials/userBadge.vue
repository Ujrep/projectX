<style lang="scss">
  // testing sass
  $color: #000;
  $border-color: #ccc;
  $font-color: #dfdede;
  .UserBadge {
      width: 200px;
      height: 300px;
      border: 1px solid $border-color;
      &__photo{
          width: 80px;
          height: 50px;
          background: $color;
      }
      ul{
          list-style: none;
          li{
              display: block;
              a{
                  text-decoration: none;
                  color: $font-color;
              }
          }
      }
  }
</style>

<template>
  <div class="UserBadge">
      <div class="UserBadge__photo">
          <img src="" alt="" />
      </div>
      <ul>
          <li>
              <a href="#/my-jobs">My Jobs</a>
          </li>
          <li>
              <a href="#/my-profile">My Profile</a>
          </li>
          <li>
              <a href="#/my-settings">Settings</a>
          </li>
          <li v-if="!noLogout">
              <a href="#">Log out</a>
          </li>
      </ul>
  </div>
</template>

<script>
  export default {
    name: 'Badge',
    data() {
      return {
        msg: 'User badge component',
      };
    },
    props: ['noLogout']
  };
</script>
