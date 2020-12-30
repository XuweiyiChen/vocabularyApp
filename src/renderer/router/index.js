import Vue from 'vue'
import Router from 'vue-router'
import vocabularyList from '../view/vocabulary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vocabularyList',
      component: vocabularyList
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
