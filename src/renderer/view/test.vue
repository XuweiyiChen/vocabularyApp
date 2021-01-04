<template>
  <div id="app">
    <v-app id="inspire">      
      <v-container fluid class="text-xs-center" fill-height>
        <!-- <v-layout align-center justify-center>
          <v-flex xs6> -->
          <!-- <v-row no-gutters>   -->
            <!-- <v-card> -->
            <v-col fluid>
              <!-- <v-col> -->
                <v-toolbar-title>Chinese - English Test</v-toolbar-title>
                <v-divider></v-divider>
                <p class="pt-4">please fill in the corresponding english word</p>
              <!-- </v-col> -->

              <!-- <v-row> -->
              <!-- <v-col> -->
                <!-- need to load from vocab list -->
                <v-list-item v-for="(item, i) in items" :key="i">
                  <label class="pr-16">{{item}}</label>
                  <v-text-field style="width: 40px"></v-text-field>
                </v-list-item>
              <!-- </v-col> -->
                  <!-- <v-col>
                    <v-list-item v-for="(item, i) in items" :key="i" @contextmenu="show" @mousedown.right="showRight(i)" @click="clickOnNav">
                      <v-text-field
                        :counter="10"
                        required
                      ></v-text-field>
                    </v-list-item>
                  </v-col> -->
              <!-- </v-row> -->
              
              <div class="text-xs-center">
                <v-btn align="center" justify="center" color="teal" dark small grow> 
                  <!-- @click="add"  -->
                    check answer
                    <!-- <v-icon>mdi-plus</v-icon> -->
                </v-btn>
              </div>
              <!-- </v-card> -->
            </v-col>
          <!-- </v-row> -->
          <!-- </v-flex>
        </v-layout> -->
      </v-container>
    </v-app>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: ['word', 'word', 'word', 'word']
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>