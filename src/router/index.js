import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Big from '../components/big/Big.vue'
import Small from '../components/small/Small.vue'
import Welcome from '../components/Welcome.vue'
import ListShow from '../components/datalistshow/datalistshow.vue'
import PeopleOne from '../components/datalistshow/peopleone.vue'
import PeopleTwo from '../components/datalistshow/peopletwo.vue'
import PeopleThree from '../components/datalistshow/peoplethree.vue'
import AnimalOne from '../components/datalistshow/animalone.vue'
import AnimalTwo from '../components/datalistshow/animaltwo.vue'
import AnimalThree from '../components/datalistshow/animalthree.vue'
import PlantOne from '../components/datalistshow/plantone.vue'
import PlantTwo from '../components/datalistshow/planttwo.vue'
import PlantThree from '../components/datalistshow/plantthree.vue'
import EarthWelcome from '../components/datalistshow/welcome.vue'
// import Test from '../components/test.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/welcome',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path: '/people1',
    //   name: 'PeopleOne',
    //   component: PeopleOne
    // },
    // {
    //   path: '/test',
    //   name: 'Test',
    //   component: Test,
    //   children:[
    //     {
    //       path:'people1',
    //       component: PeopleOne
    //     }
    //   ]
    // },
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
    {
      path: '/listShow',
      redirect:'/earth/welcome',
      name: 'ListShow',
      component: ListShow,
      // children:[
      //   {
      //     path:'test',
      //     component:Test
      //   }
      // ]
    },
    {
      path: '/earth',
      name: 'Earth',
      component: ListShow,
      children:[
        {
          path:'welcome',
          component:EarthWelcome
        },
        {
          path:'people1',
          component:PeopleOne
        },
        {
          path:'people2',
          component:PeopleTwo
        },
        {
          path:'people3',
          component:PeopleThree
        },
        {
          path:'animal1',
          component:AnimalOne
        },
        {
          path:'animal2',
          component:AnimalTwo
        },
        {
          path:'animal3',
          component:AnimalThree
        },
        {
          path:'plant1',
          component:PlantOne
        },
        {
          path:'plant2',
          component:PlantTwo
        },
        {
          path:'plant3',
          component:PlantThree
        },
      ]
    },
  ]
})
