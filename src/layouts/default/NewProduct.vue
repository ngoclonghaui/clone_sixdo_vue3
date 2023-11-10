<template>
  <banner></banner>
  <v-card style="margin-top: 10px; margin-left: 100px">
    <v-card-text style="font-size: 25px ;padding-left: 0;"> Categori </v-card-text>
    <hr style="width: 15%; border: 1px solid black" />
    <div style="display: flex; height: 40px; width: 230px">
      <p style="width: 130px">Sản phẩm mới</p>
      <v-icon @click="toggleList('newPro')">
        {{ showNewProList ? "mdi-minus" : "mdi-plus" }}
      </v-icon>
    </div>
    <v-list
      v-show="showNewProList"
      v-for="item in listNewPro"
      :key="item.id"
      style="padding: 0; width: 150px; margin-left: 40px"
    >
      <v-list-item style="padding: 0; margin: 0">
        <router-link
          style="display: flex; text-decoration: none; color: #000"
          to="#"
        >
          {{ item.name }}
        </router-link>
      </v-list-item>
    </v-list>
    <hr style="width: 15%; border: 1px solid black" />
    <div style="display: flex; height: 40px; width: 230px">
      <p style="width: 130px">Sale 70%</p>
      <v-icon @click="toggleList('sale70')">
        {{ showSale70List ? "mdi-minus" : "mdi-plus" }}
      </v-icon>
    </div>
    <v-list
      v-show="showSale70List"
      v-for="item in listSale70"
      :key="item.id"
      style="padding: 0; width: 150px; margin-left: 40px"
    >
      <v-list-item style="padding: 0; margin: 0">
        <router-link
          style="display: flex; text-decoration: none; color: #000"
          to="#"
        >
          {{ item.name }}
        </router-link>
      </v-list-item>
    </v-list>
    
  </v-card>
</template>

<script>
import AppBar from "./AppBar.vue";
import Banner from "./banner.vue";
export default {
  components: { AppBar, Banner },
  data() {
    return {
      listNewPro: [
        { id: 1, name: "Váy đầm" },
        { id: 2, name: "Quần nữ" },
        { id: 3, name: "Áo nữ" },
        { id: 4, name: "Áo phông" },
        { id: 5, name: "Chân váy" },
        { id: 6, name: "Áo Vest nữ" },
        { id: 7, name: "Set đồ nữ" },
        { id: 8, name: "Áo khóa dáng dài" },
      ],
      listSale70: [
        { id: 1, name: "Váy đầm" },
        { id: 2, name: "Chân váy" },
        { id: 3, name: "Áo Vest nữ" },
        { id: 4, name: "Quần nữ" },
        { id: 5, name: "Áo nữ" },
        { id: 6, name: "Áo phông" },
        { id: 7, name: "Sản phẩm khác" },
        { id: 8, name: "Áo Mangto" },
      ],
      showNewProList: true,
      showSale70List: true,
    };
  },
  methods: {
    toggleList(type) {
      if (type === "newPro") {
        this.showNewProList = !this.showNewProList;
      } else if (type === "sale70") {
        this.showSale70List = !this.showSale70List;
      }
    },
  },
};
</script>

<style scoped>
</style>