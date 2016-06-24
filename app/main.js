import 'common/base.scss';

import Vue from 'vue';
import VueRouter from 'vue-router';

import MyProfile from 'components/pages/profile.vue';
import MyJobs from 'components/pages/jobs.vue';
import MySettings from 'components/pages/settings.vue';
import Landing from 'components/pages/landing.vue';

Vue.use(VueRouter);
const App = Vue.extend({});
const router = new VueRouter();
router.map({
  '/my-profile': {
    component: MyProfile
  },
  '/my-jobs': {
    component: MyJobs
  },
  '/my-settings': {
    component: MySettings
  },
  '/landing': {
    component: Landing
  }
});

router.start(App, '#app');
