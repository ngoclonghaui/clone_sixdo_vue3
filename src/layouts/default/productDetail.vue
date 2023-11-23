<template>
  <banner></banner>
  <div>
    <v-img :src="productDetails.linkAnh" alt="Product Image"></v-img>
    <div>{{ productDetails.name }}</div>
    <div>{{ productDetails.price }}</div>
    <!-- Thêm các trường thông tin sản phẩm khác tại đây -->
  </div>
</template>

<script>
import banner from './banner.vue';
export default {
  components:{banner},
  props: {
    productDetails: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>