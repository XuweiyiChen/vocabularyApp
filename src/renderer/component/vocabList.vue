<template>
  <v-card height="800px" >
    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
                Lists
            </v-list-item-title>
          </v-list-item-content>

          <v-list-item-content style="height: 0px; position: relative">
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
              > +
                <!-- <v-icon>mdi-plus</v-icon> -->
              </v-btn>
            </v-fab-transition>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
  
      <v-list nav dense>
        <v-list-item-group v-model= "selectedItem" color="primary" class="list-group">
          <!-- <v-list-item v-for="(item, i) in items" :key="i"> -->
          <!-- <v-list-item v-for="(item, i) in items" :key="i" @contextmenu="show" @mousedown.right="showRight(i)"> -->
          <!-- <v-list-item-content> -->
              <!-- <v-list-item-title v-text="item"></v-list-item-title> -->
            <ul>
              <li v-for="(item, i) in items" :key="i" v-text="item.text">
                <div v-show = "item.edit == false">
                  <label @dblclick = "item.edit = true"> {{item.text}} </label>
                </div>
                <input v-show = "item.edit == true" v-model = "item.text"
                v-on:blur= "item.edit=false; $emit('update')"
                @keyup.enter = "item.edit=false; $emit('update')">
              </li>
            </ul>
          <!-- </v-list-item-content> -->
          <!-- </v-list-item> -->
        </v-list-item-group>
      </v-list>
      
      <v-row align="center" justify="space-around">
          <v-btn small outlined  color="primary" @click="add">Add</v-btn>
          <v-btn small outlined id="remove" color="error" @click="remove">Remove</v-btn>
      </v-row>

      <v-menu
        v-model="showMenu"
        :position-x="x"
        :position-y="y"
        absolute
        offset-y
      >
        <v-list>
          <v-list-item v-for="(item, index) in itemsForMenu" :key="index">
            <!-- <v-list-item-title><v-btn @click="clickOnMenu(item)" @update-value="updateVal">{{ item }}</v-btn></v-list-item-title> -->
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
      selectedItem: 0,
      editedItem: null,
      items: [
        {'text': 'list 1', 'edit': false},
        {'text': 'list 2', 'edit': false},
        {'text': 'list 3', 'edit': false}
      ],
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
      reviseitems.splice(length, 0, 'new list')
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
    },
    showRight (i) {
      console.log(i)
      this.selectedItem = i
    },
    editTodo: function (item) {
      this.editedItem = item
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