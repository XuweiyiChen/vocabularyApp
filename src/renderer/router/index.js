import Vue from 'vue'
import Router from 'vue-router'
// import vocabularyList from '../view/vocabulary'
import lists from '../view/lists'
// import vocabList from '../component/vocabList.vue'
import Test from '../view/test'
import Stats from '../view/stats'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'vocabularyList',
      // component: vocabularyList
      name: 'lists',
      component: lists
      // name: 'test',
      // component: vocabList
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/stats',
      component: Stats
    }
  ]
})
