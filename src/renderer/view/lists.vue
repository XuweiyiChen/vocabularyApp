<template>
  <div id="app">
    <v-app id="inspire">
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col cols="3">
            <vocabList></vocabList>
          </v-col>

          <v-col cols="9">
            <v-container fluid>
              <v-row>
                <v-col cols="12" sm="12" md="6" offset-md="3">
                  <v-card>
                    <v-card-text style="height: 700px;" class="lighten-5 text-center">
                      <v-data-table
                        :headers="headerArray"
                        :items="vocabs"
                        :search="search"
                        :hide-default-header="hideHeaders"
                        :show-select="showSelect"
                        :loading="isLoading"
                        hide-default-footer
                        item-key="name"
                        class="elevation-1">
                      </v-data-table>
                    </v-card-text>

                    <v-dialog v-model="dialog" width="500">
                      <template v-slot:activator="{ on, attrs }">    
                        <v-card-text style="height: 50px; position: relative">
                          <v-fab-transition>
                            <v-btn
                              color="black"
                              outlined
                              dark
                              absolute
                              top
                              right
                              fab
                              x-small
                              v-bind="attrs"
                              v-on="on"
                              > +
                              <!-- <v-icon>mdi-plus</v-icon> -->
                            </v-btn>
                          </v-fab-transition>
                        </v-card-text>
                      </template>

                      <v-card>
                        <v-card-title class="headline grey lighten-2">word</v-card-title>

                        <v-card-text>  
                          <v-subheader>Front</v-subheader>

                          <v-col cols="6" sm="6" display:flex>
                            <v-text-field label="front" placeholder="Placeholder" solo class="shrink">
                            </v-text-field>
                          </v-col>

                          <v-subheader>Back</v-subheader>

                          <v-col cols="12" sm="6">
                            <v-text-field
                              label="back"
                              placeholder="Placeholder"
                              solo
                              height="100"
                            ></v-text-field>
                          </v-col>
                        </v-card-text>
                            
                        <v-divider></v-divider>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="primary"
                            text
                            @click="dialog = false"
                          >
                            Done
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>

            <!-- <v-col cols="12" sm="12">
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
            </v-col> -->
          </v-col>
        </v-row>

        <v-container class="grey lighten-5">
          <v-row justify-space-between>
            <v-col md="4">
                <v-btn outlined>Stats</v-btn>
            </v-col>

            <v-col cols="3">
              <v-btn outlined>Test</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-app>
  </div>
</template>

<script>
  import vocabList from '../component/vocabList'

  export default {
    components: {
      vocabList
    },
    props: {
      search: true,
      hideHeaders: true,
      showSelect: true,
      isLoading: true
    },
    data () {
      return {
        dialog: false,
        vocabs: [
          {front: 'abash', back: '使尴尬，使羞愧', due: '11/11/2020', memory: 'weak'}, // color icon <--- memory  sort by col
          {front: 'abate', back: '减轻, 减少, 停止', due: '11/11/2020', memory: 'good'},
          {front: 'abbreviate', back: '缩写, 缩短', due: '11/11/2020', memory: 'weak'}
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
      // getColor (calories) {
      //   if (calories > 400) return 'red'
      //   else if (calories > 200) return 'orange'
      //   else return 'green'
      // }
    }
  }
</script>

<style>

</style>