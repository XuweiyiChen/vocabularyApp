<template>

<div id="app">
  <v-app id="inspire">
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="3">
          <vocabList></vocabList>
        </v-col>

        <v-col cols="9">
          <v-card height="400px">
            <v-list subheader right>
              <div id="app">
                <v-app id="inspire">
                  <div class="d-flex flex-column mb-6">
                    <v-col cols="10" d-flex justify-space-between>
                      <v-data-table
                        :headers="headerArray"
                        :items="vocabs"
                        :search= "search"
                        :hide-default-header= "hideHeaders"
                        :show-select= "showSelect"
                        :loading= "isLoading"
                        hide-default-footer
                        item-key="name"
                        class="elevation-1"
                      >
                      </v-data-table>
                    </v-col>
                    <v-col cols="2" d-flex justify-space-between>
                      <v-btn outlined>Add</v-btn>
                    </v-col>
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