import Vue from 'vue'
import Router from 'vue-router'


import VklFind from '../pages/VklFind.vue'
import VklDetail from '../pages/VklDetail.vue'
import VklMyindent from '../pages/VklMyindent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello1',
      component: VklFind

    },
    {
      path: '/d',
      name: 'Hello2',
      component: VklDetail
    },{
      path: '/m',
      name: 'Hello3',
      component: VklMyindent
    }
  ]
})
