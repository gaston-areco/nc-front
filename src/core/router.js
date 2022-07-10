import Vue from 'vue';
import Router from 'vue-router';
import Base from './views/Base.vue';
import ModulesRouter from '../modules/main.router.js';
import NotFound from './components/NotFound';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      meta: {requiresAuth: true, name: 'Base'},
      component: Base,
      children: ModulesRouter,
    }, {
      path: '*',
      meta: {requiresAuth: true, name: 'Base'},
      component: Base,
      children: [
        {
          path: '',
          component: NotFound
        }
      ],
    }
  ]
});

export default router;
