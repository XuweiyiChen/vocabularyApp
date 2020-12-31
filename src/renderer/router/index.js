import Vue from 'vue'
import Router from 'vue-router'
// import vocabularyList from '../view/vocabulary'
import lists from '../view/lists'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'vocabularyList',
      // component: vocabularyList
      name: 'lists',
      component: lists
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
