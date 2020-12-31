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
            <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
    </v-card>
</template>

<script>
export default {
  data () {
    return {
      selectedItem: 0,
      items: [
        {text: 'list 1'},
        {text: 'list 2'},
        {text: 'list 3'}
      ]
    }
  }
}
</script>

<style>

</style>