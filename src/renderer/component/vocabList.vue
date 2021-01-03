<template>
  <v-card height="900px" >
    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
                Lists
            </v-list-item-title>
          </v-list-item-content>

          <v-list-item-content style="height: 0px; position: relative">
            <!-- <v-fab-transition> -->
              <v-btn color="teal" absolute dark
                right x-small @click="add"> 
                +
                <!-- <v-icon>mdi-plus</v-icon> -->
              </v-btn>
            <!-- </v-fab-transition> -->
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
  
      <v-list nav dense>
        <v-list-item-group mandatory v-model= "selectedItem" color="primary" class="list-group">
          <!-- <v-list-item v-for="(item, i) in items" :key="i"> -->
          <!-- <v-list-item v-for="(item, i) in items" :key="i" @contextmenu="show" @mousedown.right="showRight(i)"> -->
          <!-- <v-list-item> -->
              <!-- <v-list-item-title v-text="item"></v-list-item-title> -->
            <!-- <ul> -->
              <v-list-item v-for="(item, i) in items" :key="i" @contextmenu="show" @mousedown.right="showRight(i)" @click="clickOnNav">
                <label v-if="i !== indexValue"> {{ item }} </label>
                <input autofocus type = "text" v-if="i === indexValue" v-model = "newName" v-on:keyup.13="submit">
              </v-list-item>
            <!-- </ul> -->
          <!-- </v-list-item-content> -->
          <!-- </v-list-item> -->
        </v-list-item-group>
      </v-list>
      
      <v-row align="center" justify="space-around">
          <!-- <v-btn small outlined color="primary" @click="add">Add</v-btn> -->
          <!-- <v-btn small outlined id="remove" color="error" @click="remove">Remove</v-btn> -->
      </v-row>

      <v-menu
        v-model="showMenu"
        :position-x="x"
        :position-y="y"
        absolute
        offset-y
      >
        <v-list>
          <v-list-item v-for="(item, index2) in itemsForMenu" :key="index2">
            <v-btn text @click="clickOnMenu(item)">{{ item }}</v-btn>
            <!-- @update-value="updateVal" removed-->
          </v-list-item>
        </v-list>
      </v-menu>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      indexValue: -1,
      newName: '',
      selectedItem: 0,
      editedItem: null,
      items: ['word_list_1'],
      showMenu: false,
      x: 0,
      y: 0,
      itemsForMenu: ['Rename',
        'Edit'
        // 'Delete'
      ]
    }
  },
  methods: {
    add () {
      console.log('Add')
      let reviseitems = this.items
      let length = this.items.length
      reviseitems.splice(length, 0, '')
      this.selectedItem = length
      this.clickOnMenu('Rename')
    },
    remove () {
      console.log('remove')
      console.log(this.selectedItem)
      let reviseitems = this.items
      reviseitems.splice(this.selectedItem, 1)
      console.log(reviseitems.splice(this.selectedItem, 1))
    },
    show (e) {
      e.preventDefault()
      this.showMenu = false
      this.x = e.clientX
      this.y = e.clientY
      this.$nextTick(() => {
        this.showMenu = true
      })
    },
    clickOnMenu (item) {
      console.log(item)
      if (item === 'Rename') {
        console.log(this.selectedItem)
        this.indexValue = this.selectedItem
        console.log('this.indexValue', item)
        console.log('this.indexValue', this.indexValue)
      }
    },
    showRight (i) {
      console.log(i)
      this.selectedItem = i
    },
    editTodo: function (item) {
      console.log(0)
      this.editedItem = item
    },
    clickOnNav () {
      console.log(this.selectedItem)
      console.log(this.items[this.selectedItem])
      this.$emit('changeList', this.items[this.selectedItem])
      console.log(222222222)
      // TODO disable some time between
      // it will break if switch too fast
    },
    submit () {
      let newItem = this.items
      newItem[this.indexValue] = this.newName
      // console.log(33333333)
      // console.log(newItem)
      this.newName = null
      this.indexValue = -1
    }
  }
}
</script>

<style scoped>
#remove {
    height: 28px;
    width: 70px;
    min-width: 50px;
}

.portrait.v-card {
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}
</style>