import Vue from 'vue'
import Router from 'vue-router'
import Scaffold from '@/pages/Scaffold'
import Test from '@/pages/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Scaffold',
      component: Scaffold
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
