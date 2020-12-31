<template>

<div id="app">
  <v-app id="inspire">
    <v-container class="grey lighten-5">
      <v-row no-gutters>

        <v-col cols="2">
          <v-card height="800px" >
            <v-navigation-drawer permanent>

              <v-list>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title class="title">
                      Vocab Lists
                      <!-- <v-icon>mdi-heart</v-icon>  ？？ -->
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>
          
              <v-list nav dense>
                <v-list-item-group v-model="selectedItem" color="primary">
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>

            </v-navigation-drawer>
          </v-card>
        </v-col>

        <v-col cols="9">

          <v-card height="400px">
            <v-list subheader right>

              <!-- <v-subheader>vocab</v-subheader> -->

              <div id="app">
                <v-app id="inspire">
                  <div class="d-flex flex-column mb-6">
                    <!-- <div class="justify-space-between"> -->
                      <v-col cols="10" d-flex justify-space-between>
                        <v-data-table
                          :headers="headerArray"
                          :items="items[0].vocabs"
                          :search="search"
                          :hide-default-header="hideHeaders"
                          :show-select="showSelect"
                          :loading="isLoading"
                          hide-default-footer
                          item-key="name"
                          class="elevation-1"
                        >
                        </v-data-table>
                      </v-col>

                      <v-col cols="2" d-flex justify-space-between>
                        <v-btn outlined>Add</v-btn>
                      </v-col>
                    <!-- </div> -->
                  </div>
                </v-app>
              </div>

            </v-list>
          </v-card>

          <v-card height="400px">
            <v-list subheader right>
              <v-subheader>Front</v-subheader>

              <v-col cols="6" sm="6">
                <v-text-field
                  label="Solo"
                  placeholder="Placeholder"
                  solo
                ></v-text-field>
              </v-col>

              <v-subheader>Back</v-subheader>

              <v-col cols="12" sm="6">
                <v-text-field
                  label="Solo"
                  placeholder="Placeholder"
                  solo
                  height="100"
                ></v-text-field>
              </v-col>
            </v-list>
          </v-card>

        </v-col>
      </v-row>

      <v-container class="grey lighten-5">
        <v-row :justify="space-between">
          <!-- <v-col cols="11">
            <v-card height="50px" > -->
              <v-col md="4">
                  <v-btn outlined>Stats</v-btn>
              </v-col>
              <v-col cols="3">
                <v-btn outlined>Test</v-btn>
              </v-col>
            <!-- </v-card>
          </v-col> -->
        </v-row>
      </v-container>
    </v-container>
  </v-app>
</div>

</template>

<script>
  export default {
    data () {
      return {
        items: [
          {text: 'list 1',
            vocabs: [
              {front: 'abash', back: '使尴尬，使羞愧', due: '11/11/2020', memory: 'weak'}, // color icon <--- memory  sort by col
              {front: 'abate', back: '减轻, 减少, 停止', due: '11/11/2020', memory: 'good'},
              {front: 'abbreviate', back: '缩写, 缩短', due: '11/11/2020', memory: 'weak'}
            ]
          },
          {text: 'list 2'},
          {text: 'list 3'}
        ],
        headerArray: [
          {text: 'front', align: 'start', sortable: false, value: 'front'},
          {text: 'back', value: 'back'},
          {text: 'due', value: 'due'},
          {text: 'memory', value: 'memory'}
        ]
      }
    },
    methods: {
      getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      }
    }
  }
</script>

<style>

</style>