<template>
  <v-card style="background: #f6f3e4; margin: 0 0">
    <banner></banner>
    <v-card-text
      style="font-size: 30px; text-transform: uppercase; text-align: center"
      >New Arrival</v-card-text
    >
    <v-row>
      <v-col cols="3" v-for="item in listArrival" :key="item.id">
        <v-card
          outlined="false"
          style="width: 300px; height: 500px; margin-left: 50px"
        >
          <v-card-text class="pa-0" style="height: 650px; padding-left: 100px">
            <router-link
              to="/productdetail/{{ item.id }}"
            >
              <v-img
                :src="item.currentImg"
                class="img"
                @mouseover="item.currentImg = item.linkAnh2"
                @mouseleave="item.currentImg = item.linkAnh"
                max-width="600px"
                height="600px"
                style="
                  padding-left: 20px;
                  margin-left: 0;
                  object-fit: cover;
                  margin-top: -90px;
                "
              ></v-img>
            </router-link>
            <v-row style="padding-left: 20px; margin-top: -70px">
              <span>{{ item.price }}</span>
            </v-row>

            <v-row style="padding-left: 20px">
              <router-link to="'productInfor/' + item.name" class="nameLink"
                >{{ item.name }}
              </router-link>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-btn class="btn" rounded="lg" outlined size="x-large">
      <router-link
        to="/newproduct"
        style="color: black; text-transform: uppercase; text-decoration: none"
        >Xem thêm</router-link
      >
    </v-btn>
    <hr
      style="
        width: 95%;
        border-top: 1px solid black;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 30px;
      "
    />
    <v-row>
      <v-col cols="4" v-for="item in listInsta" :key="item.id">
        <v-img
          :src="item.link"
          max-width="470px"
          max-height="470px"
          style="margin-left: 30px"
        >
        </v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="3"
        style="background: #000; height: 140px; border-right: 1px solid #fff"
      >
        <v-card-text style="color: #fff">
          <v-icon style="max-width: 50px; font-size: 50px; margin-left: 140px"
            >mdi-history</v-icon
          >
        </v-card-text>
        <v-card-text class="text1">6 ngày đổi sản phẩm </v-card-text>
      </v-col>
      <v-col
        cols="3"
        style="background: #000; height: 140px; border-right: 1px solid #fff"
      >
        <v-card-text style="color: #fff">
          <v-icon style="max-width: 50px; font-size: 50px; margin-left: 140px"
            >mdi-phone-in-talk</v-icon
          >
        </v-card-text>
        <v-card-text class="text1">hotline 1800 6650</v-card-text>
      </v-col>
      <v-col
        cols="3"
        style="background: #000; height: 140px; border-right: 1px solid #fff"
      >
        <v-card-text style="color: #fff">
          <v-icon style="max-width: 50px; font-size: 50px; margin-left: 140px"
            >mdi-store-marker-outline</v-icon
          >
        </v-card-text>
        <v-card-text class="text1">Hệ thống cửa hàng </v-card-text>
      </v-col>
      <v-col cols="3" style="background: #000; height: 140px">
        <v-card-text style="color: #fff">
          <v-icon style="max-width: 50px; font-size: 50px; margin-left: 140px"
            >mdi-car-lifted-pickup</v-icon
          >
        </v-card-text>
        <v-card-text class="text1">Vận chuyển</v-card-text>
      </v-col>
    </v-row>
    <footer-main></footer-main>
  </v-card>
</template>

<script>
import NewProduct from "@/layouts/default/NewProduct.vue";
import banner from "@/layouts/default/banner.vue";
import New_arrival from "./New_arrival.vue";
import Arrival from "@/GetApi/arrival";
import FooterMain from "@/layouts/default/FooterMain.vue";
import productDetail from '@/layouts/default/productDetail.vue';
export default {
  components: { banner, FooterMain,productDetail },
  data() {
    return {
      listArrival: [],
      listInsta: [],
      currentImg: null,
    };
  },
  methods: {
    getAllArrival() {
      this.listArrival = Arrival.getAll();
    },
    getAllInsta() {
      this.listInsta = Arrival.getAllInsta();
    },
    changeImg() {
      this.listArrival.forEach((e) => {
        return e.linkAnh2;
      });
    },
  },
  created() {
    this.getAllArrival();
    this.getAllInsta();
  },
  mounted() {
    this.getAllArrival();
    this.getAllInsta();
  },
};
</script>

<style>
.text {
  text-transform: uppercase;
  font-size: 20px;
  text-align: center;
}
.btn {
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: auto;
  margin-top: 20px;
  background: #f6f3e4;
  border: 1px solid black;
}
.text1 {
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
  color: #fff;
}
.nameLink {
  text-decoration: none;
  color: #000;
  transition: all 0.3s;
  cursor: pointer;
  display: inline-block;
}
.nameLink span:hover {
  font-style: italic;
  font-weight: bold;
}
</style>