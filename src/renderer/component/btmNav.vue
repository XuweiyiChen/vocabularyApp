<template>
  <article>
    <!-- <v-card class="tabs">
      <v-bottom-navigation fixed color="teal" grow>
        <v-btn v-for="(tab,index) in tabs" :key="index">
          <span :class="{'is-active' : tab.isActive}" v-on:click="selectTab(tab)">
            <router-link to="/${tab.name}">{{tab.name}}</router-link>
          </span>
        </v-btn>
      </v-bottom-navigation>
    </v-card> -->
    <section class="tabs-details">
      <slot></slot>
    </section>
  </article>
</template>

<script>
  export default {
    data () {
      return {
        tabs: []
      }
    },
    methods: {
      selectTab (selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = tab.name === selectedTab.name
          // this.$router.push('/' + tab.name).catch(() => {})
        })
      }
    },
    created () {
      this.tabs = this.$children
    }
  }
</script>

<style scoped>

</style>