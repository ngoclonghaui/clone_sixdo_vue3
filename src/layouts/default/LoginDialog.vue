<template>
  <v-dialog v-model="show_dialog" width="1000px" height="800px">
    <v-card>
      <v-row>
        <v-btn>
          <v-icon> mdi-close </v-icon>
        </v-btn>
      </v-row>
      <v-row>
        <v-card-text class="text1"> Tài khoản </v-card-text>
      </v-row>
      <v-tabs v-model="tab">
        <v-tab :key="'first'"> Sign in </v-tab>
        <v-tab :key="'second'">Log in</v-tab>
      </v-tabs>
      <v-card-text>
        <v-tab-items v-model="tab">
          <v-tab-item key="'first'" @click="abc()">
            {{ 123 }}
            <v-card-text> Tai app Sixdo nhan ngay voucher </v-card-text>
            <v-img
              src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/316421671_1772397633158616_3741267832339082495_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RGGNthABdR8AX8cUHRE&_nc_ht=scontent.fhan5-2.fna&oh=00_AfCMEkzlowHtrG1G5ByA5oKd18b8a7ds-DVlGK5xNKb8Ww&oe=654E4C14"
              max-width="300px"
              height="300px"
            >
            </v-img>
          </v-tab-item>
        </v-tab-items>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      show_dialog: false,
    };
  },
  props: {
    show: Boolean,
  },
  methods: {
    showDialog() {
      this.show_dialog = true;
    },
    abc() {
      alert("123");
    },
  },
};
</script>

<style>
.text1 {
  text-transform: uppercase;
}
</style>
