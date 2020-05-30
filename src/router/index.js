import Vue from 'vue';
import Router from 'vue-router';

import About from '../pages/About';
import Index from '../pages/Index';
import Manage from '../pages/Manage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      component: Index,
      name: 'Index',
      path: '/',
    },
    {
      component: About,
      name: 'About',
      path: '/about',
    },
    {
      component: Manage,
      name: 'Manage',
      path: '/manage',
    },
  ],
});
