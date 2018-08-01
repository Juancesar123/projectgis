import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/Homepage'
import KulinerPage from '@/pages/KulinerPage'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
        path: '/kuliner',
        name: 'Kuliner',
        component: KulinerPage
      }
  ]
})