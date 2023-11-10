<template>
  <v-row style="margin-top: 40px">
    <v-col cols="3" offset="2" class="text">
      <p>sản phẩm</p>
      <v-list
        v-for="item in listItem1"
        :key="item.name"
        style="background: #f6f3e4; padding: 0"
      >
        <v-list-item>
          <a
            :href="item.link"
            style="
              text-decoration: none;
              display: flex;
              display: flexbox;
              font-size: 15px;
              color: black;
            "
            >{{ item.name }}</a
          >
        </v-list-item>
      </v-list>
    </v-col>
    <v-col cols="3" class="text">
      <v-list
        v-for="item in listItem2"
        :key="item.name"
        style="background: #f6f3e4; padding: 0"
      >
        <v-list-item>
          <a
            :href="item.link"
            style="
              text-decoration: none;
              display: flex;
              display: flexbox;
              font-size: 15px;
              color: black;
            "
            >{{ item.name }}</a
          >
        </v-list-item>
      </v-list>
    </v-col>
    <v-col cols="3">
      <v-icon
        class="icon"
        @click="navigateTo('https://www.facebook.com/sixdo.vn/')"
        >mdi-facebook</v-icon
      >
      <v-icon
        class="icon"
        @click="navigateTo('https://www.instagram.com/sixdovn/?hl=vi')"
        >mdi-instagram</v-icon
      >
      <v-icon
        class="icon"
        @click="navigateTo('https://www.youtube.com/channel/UCEVf2PNxISwcRKM2WpZkdJg')"
        >mdi-youtube</v-icon
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      listItem1: [
        { name: "Sản phẩm mới", link: "https://sixdo.vn/clothes-p20" },

        { name: "Sản phẩm giảm giá", link: "https://sixdo.vn/clothes-p20" },

        { name: "phụ kiện", link: "https://sixdo.vn/clothes-p20" },

        { name: "bộ sưu tập", link: "https://sixdo.vn/clothes-p20" },

        { name: "trình diễn thời trang", link: "https://sixdo.vn/clothes-p20" },
      ],
      listItem2: [
        { name: "Chính sách mua sắm", link: "https://sixdo.vn/clothes-p20" },

        { name: "Sixclub", link: "https://sixdo.vn/clothes-p20" },

        {
          name: "câu chuyện thương hiệu",
          link: "https://sixdo.vn/clothes-p20",
        },

        { name: "hệ thống cửa hàng", link: "https://sixdo.vn/clothes-p20" },

        { name: "tuyển dụng", link: "https://sixdo.vn/clothes-p20" },
        {
          name: "liên hệ",
          link: "#",
        },
      ],
    };
  },
  methods: {
    navigateTo(link) {
      window.location.href = link;
    },
  },
};
</script>

<style>
.text {
  font-size: 30px;
  text-transform: uppercase;
  text-align: center;
  background: #f6f3e4;
}
.icon {
  font-size: 50px;
  margin-left: 60px;
  display: flexbox;
  cursor: pointer;
}
</style>