<template>
  <v-app>
    <v-main> 
      <BtmNav>
        <Tab name = "Stats">
          <Stats></Stats>
        </Tab>

        <Tab name = "Main" selected = "true">
          <List></List>
        </Tab>

        <Tab name = "Test">
          <Test></Test>
        </Tab>
      </BtmNav>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  import BtmNav from './component/btmNav'
  import Tab from './component/Tab'
  import Test from './view/test'
  import List from './view/lists'
  import Stats from './view/stats'

  export default {
    components: {
      BtmNav,
      Tab,
      Test,
      List,
      Stats
    }
  }
</script>
