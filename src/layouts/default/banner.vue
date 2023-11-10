<template>
  <v-carousel cycle show-arrows="hover" :interval="3000">
    <v-carousel-item v-for="item in listImg" :key="item.id">
      <v-img :src="item.link" cover style="cursor: pointer"></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      listImg: [
        {
          id: 1,
          link: "https://sixdo.vn/images/banners/resized/z4794943705231_f1b2fbc04fce77391414a07a7d94a052-1697619282.webp",
        },
        {
          id: 2,
          link: "https://sixdo.vn/images/banners/resized/z4746281962337_9af054f0a6aec0a7d46366aa75c62244-1696236200.webp",
        },
        {
          id: 3,
          link: "https://sixdo.vn/images/banners/resized/z4845441960960_f23902d611137b4688f46c148b9fa69e-1699005382.webp",
        },
        {
          id: 4,
          link: "https://sixdo.vn/images/banners/resized/z4823051739262_0e28f858e1ad106a0a9a7fd1861d23d5-1698395170.webp",
        },
        {
          id: 5,
          link: "https://sixdo.vn/images/banners/resized/z4809482037081_9c29fec424b2e6f57c8648ddbd5c7013-1698045026.webp",
        },
      ],
    };
  },
};
</script>

<style>
</style>