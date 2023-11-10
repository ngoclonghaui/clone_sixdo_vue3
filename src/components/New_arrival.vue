<template>
  <v-row>
    <v-col cols="2" v-for="item in listArrival" :key="item.id">
      <v-img :src="item.linkAnh"></v-img>
    </v-col>
  </v-row>
</template>

<script>
import Arrival from "@/GetApi/arrival.js";
export default {
  data() {
    return {
      listArrival: [],
    };
  },
  methods: {
    getAllArrival() {
      this.listArrival = Arrival.getAll();

      console.log(this.listArrival);
    },
  },
  created() {
    this.getAllArrival();
  },
};
</script>

<style>
</style>