<template>
  <article>
    <v-card>
      <v-bottom-navigation fixed :value="value" color="teal" grow class="tabs">
        <v-btn v-for="(tab,index) in tabs" :key="index">
          <span :class="{'is-active' : tab.isActive}" @click="selectTab(tab)">{{tab.name}}</span>
        </v-btn>
      </v-bottom-navigation>
    </v-card>
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