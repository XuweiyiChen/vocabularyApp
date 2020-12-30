<template>
  <v-app>
    <v-btn>新建</v-btn>
    <v-data-table
        :headers="headers"
        :items="desserts"
        class="elevation-1"
        dark
    >
        <template v-slot: item.calories="{ item }">
        <v-chip
            :color="getColor(item.calories)"
            dark
        >
            {{ item.calories }}
        </v-chip>
        </template>
    </v-data-table>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: '单词表',
            align: 'start',
            sortable: false,
            value: 'name'
          },
          { text: '分数', value: 'calories' },
          { text: '英语->中文测试', value: 'fat' },
          { text: '中文->英语测试', value: 'carbs' },
          { text: '统计', value: 'protein' },
          { text: '编辑', value: 'iron' }
        ],
        desserts: [
          {
            name: '单词表List1',
            calories: 80,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          }
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