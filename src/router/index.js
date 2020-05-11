import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Big from '../components/big/Big.vue'
import Small from '../components/small/Small.vue'
import Welcome from '../components/Welcome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/welcome',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/big',
      name: 'Big',
      component: Big
    },
    {
      path: '/small',
      name: 'Small',
      component: Small
    },
  ]
})
