import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'BarChartRace' },
    children: [
      {
        name: 'BarChartRace',
        path: '/BarChartRace',
        component: () => import('../components/BarChartRace')
      },
      {
        name: 'HelloWorld',
        path: '/HelloWorld',
        component: () => import('../components/HelloWorld')
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
