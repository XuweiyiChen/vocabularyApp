<template>
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
        <v-list-item-group v-model= "selectedItem" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i" @contextmenu="show" @mousedown.right="showRight(i)">
            <v-list-item-content>
                <v-list-item-title v-text="item"></v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
        </v-list>
        <v-row
            align="center"
            justify="space-around"
        >
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
          <v-list-item
            v-for="(item, index) in itemsForMenu"
            :key="index"
          >
            <v-list-item-title><v-btn @click="clickOnMenu(item)">{{ item }}</v-btn></v-list-item-title>
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
      items: ['list 1',
        'list 2',
        'list 3'
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