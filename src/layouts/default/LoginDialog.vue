<template>
  <v-dialog v-model="show_dialog" width="auto" height="auto">
    <v-card>
      <v-row style="display: inline-block">
        <v-btn @click="closeDialog()" class="button">
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
            <v-card-text> Tai app Sixdo nhan ngay voucher </v-card-text>
          </v-tab-item>
          <v-tab-item key="'second'">
            <v-form>
              <v-text-field
                v-model="Email"
                :rules="rules"
                label="Email"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="password_rule"
                label="Mat khau"
              ></v-text-field>
              <v-btn type="submit" block class="mt-2">Submit</v-btn>
            </v-form>
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
    closeDialog() {
      this.show_dialog = false;
    },
  },
};
</script>

<style>
.text1 {
  background: #000;
  text-transform: uppercase;
}
.button {
  float: right;
  margin-right: 5px;
  margin-top: 5px;
}
</style>
