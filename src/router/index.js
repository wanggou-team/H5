import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/Login';
import My from '@/components/My';
import Flower from '@/components/Flower';
import Home from '@/components/Home';
import Bankcard from '@/components/BindingBankCard';
import History from '@/components/History';
import About from '@/components/about';
import PersonalBank from '@/components/PersonalBank';

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
    },
    {
      path: '/personalbank',
      name: 'personalbank',
      component: PersonalBank
    }
  ],
});
