import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/Login';
import Home from '@/components/Home';
import Bankcard from '@/components/BindingBankCard';
import History from '@/components/History';
import About from '@/components/about';

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
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/bankcard',
      name: 'bankcard',
      component: Bankcard,
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ],
});
