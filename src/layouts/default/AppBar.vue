<template>
  <v-app style="height: 100px">
    <v-app-bar height="120px" style="background-color: #f6f3e4" app>
      <v-row>
        <v-col cols="5"
          ><router-link to="/">
            <v-img
              src="https://sixdo.vn/images/logo.svg"
              contain
              max-width="250px"
              max-height="250px"
              style="margin-left: 30px; margin-top: 30px;margin-bottom: 10px;"
            >
            </v-img>
          </router-link>
        </v-col>
        <v-col cols="7">
          <v-row>
            <v-col offset="4" cols="3">
              <v-card-text class="pa-0" style="margin-left: 100px">
                <v-btn class="elevation-0" color="black" @click="showDialog">
                  <v-icon> mdi-account</v-icon>Login
                </v-btn>
                <login-dialog ref="loginDialog"></login-dialog>
              </v-card-text>
            </v-col>
            <v-col cols="2">
              <v-card-text class="pa-0">
                <v-btn class="elevation-0" color="black">
                  <v-icon> mdi-magnify</v-icon>
                  Tìm kiếm
                </v-btn>
              </v-card-text>
            </v-col>
            <v-col cols="1">
              <v-card-text class="pa-0">
                <v-btn class="elevation-0" color="black"> VN </v-btn>
              </v-card-text>
            </v-col>
            <v-col cols="1">
              <v-card-text class="pa-0">
                <v-btn class="elevation-0" color="black" disabled="">
                  EN
                </v-btn>
              </v-card-text>
            </v-col>
            <v-col cols="1">
              <v-card-text class="pa-0">
                <v-btn class="elevation-0" color="black">
                  <v-icon> mdi-cart</v-icon>
                </v-btn>
              </v-card-text>
            </v-col>
          </v-row>
          <v-row style="font-size: 16px; color: black" class="justify-center">
            <v-col cols="2">
              <router-link
                to="/newproduct"
                class="custom_link"
                style="color: black; text-transform: uppercase"
                >Sản phẩm mới</router-link
              >
            </v-col>
            <v-col cols="3">
              <a href="#" style="color: black; text-transform: uppercase"
                >Sản phẩm giảm giá</a
              >
            </v-col>
            <v-col cols="2">
              <a href="#" style="color: black; text-transform: uppercase"
                >phụ kiện</a
              >
            </v-col>
            <v-col cols="2">
              <a href="#" style="color: black; text-transform: uppercase"
                >bộ sưu tập</a
              >
            </v-col>
            <v-col cols="3">
              <a href="#" style="color: black; text-transform: uppercase"
                >trình diễn thời trang</a
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
  </v-app>
</template>

<script>
import LoginDialog from "./LoginDialog.vue";
export default {
  components: { LoginDialog },
  /* eslint-disable */
  name: "App",
  data() {
    return {
      show: false,
      tab: null,
      first: null,
      seconde: null,
    };
  },
  methods: {
    showDialog() {
      this.$refs.loginDialog.showDialog();
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.text1 {
  text-transform: uppercase;
}
</style>
