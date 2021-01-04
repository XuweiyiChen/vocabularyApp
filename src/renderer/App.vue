<template>
  <v-app>
    <v-main>
      <v-card class="tabs">
        <v-bottom-navigation fixed color="teal" grow>
          <v-btn><router-link to="/stats">stats</router-link></v-btn>
          <v-btn><router-link to="/">main</router-link></v-btn>
          <v-btn><router-link to="/test">test</router-link></v-btn>
        </v-bottom-navigation>
      </v-card>

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
