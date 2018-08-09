import AddMovie from '@/components/AddMovie';
import Contact from '@/components/Contact';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Movie from '@/components/Movie';
import Register from '@/components/Register';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/movies',
      name: 'AddMovie',
      component: AddMovie,
    },
    {
      path: '/movies/:id',
      name: 'Movie',
      component: Movie,
    },
    {
      path: '/users/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/users/login',
      name: 'Login',
      component: Login,
    },
  ],
});
