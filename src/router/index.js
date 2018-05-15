import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/Login';
import My from '@/components/My';
import Flower from '@/components/Flower';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/my',
      name: 'my',
      component: My,
    },
    {
      path: '/flower',
      name: 'flower',
      component: Flower,
    },
  ],
});
