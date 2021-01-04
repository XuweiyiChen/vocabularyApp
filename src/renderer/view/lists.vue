<template>
  <div id="app">
    <v-app id="inspire">
      <BtmNav>
        <Tab name = "Stats">
          <Stats></Stats>
        </Tab>

        <Tab name = "Main" selected = "true">
          <v-container class="grey lighten-5">
            <v-row no-gutters>      
              <VocabList @changeList="listnameSet"></VocabList>

              <v-col>
                <v-container fluid>
                  <v-row>
                    <v-col>
                      <v-card>
                        <v-card-text style="height: 800px;" class="text-center">
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
                              <!-- <v-fab-transition> -->
                                <v-btn id="hi" color="teal" fixed dark
                                  bottom right fab small v-bind="attrs" v-on="on"> 
                                  +
                                  <!-- <v-icon>mdi-plus</v-icon> -->
                                </v-btn>
                              <!-- </v-fab-transition> -->
                            </v-card-text>
                          </template>

                          <v-card>
                            <v-card-title class="subtitle-2 teal lighten-2"> : </v-card-title>

                            <v-card-text>  
                              <v-subheader class="subtitle-1 mt-lg-2">Front</v-subheader>
                              <v-col cols="6" sm="6" flex>
                                <v-text-field style="width: 400px;" label="" placeholder="enter text.." outlined class="shrink" v-model="front">
                                </v-text-field>
                              </v-col>

                              <v-subheader class="subtitle-1">Back</v-subheader>

                              <v-col cols="12" sm="6">
                                <v-text-field style="width: 400px; height=100px;" label="" placeholder="enter text.." outlined class="shrink" v-model="back">
                                </v-text-field>
                              </v-col>
                            </v-card-text>
                                
                            <v-divider></v-divider>

                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="primary" text @click="addWord">
                                Done
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </Tab>

        <Tab name = "Test">
          <Test></Test>
        </Tab>
      </BtmNav>
    </v-app>
  </div>
</template>

<script>
  import VocabList from '../component/vocabList'
  import BtmNav from '../component/btmNav'
  import Tab from '../component/Tab'
  import Test from '../component/test'
  import Stats from '../component/stats'

  export default {
    components: {
      VocabList,
      BtmNav,
      Tab,
      Test,
      Stats
    },
    props: {
      search: true,
      hideHeaders: true,
      showSelect: true,
      isLoading: true
    },
    data () {
      return {
        tabs: ['a', 'b', 'c'],
        listname: null,
        dialog: false,
        value: 1,
        front: null,
        back: null,
        due: '11/11/2020',
        memory: 'weak',
        vocabs: [
          {front: 'abash', back: '使尴尬，使羞愧', due: '11/11/2020', memory: 'weak'}, // color icon <--- memory  sort by col
          {front: 'abate', back: '减轻, 减少, 停止', due: '11/11/2020', memory: 'good'},
          {front: 'abbreviate', back: '缩写, 缩短', due: '11/11/2020', memory: 'weak'}
        ],
        headerArray: [
          {text: 'Front', align: 'start', sortable: false, value: 'front'},
          {text: 'Back', value: 'back'},
          {text: 'Due', value: 'due'},
          {text: 'Memory', value: 'memory'}
        ]
      }
    },
    methods: {
      saveFile (path) {
        const fs = require('fs')
        let data = JSON.stringify(this.vocabs)
        console.log(data)
        try {
          fs.writeFileSync(path, data)
        } catch (e) {
          console.log(e)
        }
      },
      readFile (path) {
        const fs = require('fs')
        let rawFetch = fs.readFileSync(path)
        let jsonFetch = JSON.parse(rawFetch)
        return jsonFetch
      },
      addWord () {
        console.log(this.front)
        console.log(this.back)
        this.dialog = false
        let sentence = {front: this.front, back: this.back, due: this.due, memory: this.memory}
        // console.log(sentence)
        let length = this.vocabs.length
        let newvocabs = this.vocabs
        newvocabs[length] = sentence
        // let data = JSON.parse(sentence)
        console.log(this.vocabs)
        this.$set(this.vocabs, newvocabs)
        console.log(this.list)
        let path = './src/renderer/vocajson/' + this.listname + '.json'
        this.saveFile(path)
        // console.log(data)
      },
      listnameSet (newlistName) {
        this.listname = newlistName
        console.log(this.listname)
        // TWO OPTIONS
        const fs = require('fs')
        let path = './src/renderer/vocajson/' + this.listname + '.json'
        console.log('path')
        console.log(path)
        // (1) the file does not exist
        // (2) the file do exist
        try {
          if (fs.existsSync(path)) {
            // file exists
            console.log('file exists')
            let vocabJson = this.readFile(path)
            this.vocabs = vocabJson
            this.$set(this.vocabs, vocabJson)
          } else {
            // file does not exist
            console.log('file does not exist')
            // let newvocabs = this.vocabs
            // let emptyJson = []
            let emptyJson = []
            this.vocabs = emptyJson
            this.$set(this.vocabs, emptyJson)
            console.log('this.vocabs')
            console.log(this.vocabs)
          }
        } catch (err) {
          console.error(err)
        }
      }
    }
  }
</script>

<style>
  #hi {
    bottom: 80px;
  }
</style>