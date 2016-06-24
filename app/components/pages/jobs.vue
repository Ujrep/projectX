<style lang="scss">
  // testing sass
  $color: #fff;
  .whatever {
    color: $color;
  }
  .jobs{
      ul{
        list-style: none;
        li{
            display: inline-block;
            padding: 10px 20px;
            border: 1px solid #000;
            cursor: pointer;
            }
        }
    }
</style>

<template>
  <user-badge></user-badge>

  <h1 class="whatever">{{msg}}</h1>
  <div class="jobs">
      <ul>
          <li v-for="tab in tabs" @click="changeJobsTab(tab)">{{tab}}</li>
      </ul>
      <my-applications v-show="currentTab === 'My Applications'"></my-applications>
      <my-assessments v-show="currentTab === 'My Assessments'"></my-assessments>
      <my-resume v-show="currentTab === 'My Resume'"></my-resume>
  </div>
</template>

<script>
    import UserBadge from 'components/partials/userBadge.vue';
    import Applications from 'components/partials/jobs/applications.vue';
    import Assessments from 'components/partials/jobs/assessments.vue';
    import Resume from 'components/partials/jobs/resume.vue';

    export default {
        data() {
            return {
                msg: 'My jobs',
                tabs: ['My Applications', 'My Assessments', 'My Resume'],
                currentTab: 'My Applications',
                plm: true
            };
        },
        components: {
            'user-badge': UserBadge,
            'my-assessments': Assessments,
            'my-applications': Applications,
            'my-resume': Resume
        },
        methods: {
            changeJobsTab(tab) {
                this.currentTab = tab;
            }
        }
  };
</script>
