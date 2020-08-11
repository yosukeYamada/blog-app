<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title @click="toHomePage()">JavaとかVueとか</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn @click="toLoginPage()" v-if="loginStatus === false">
      <span class="mr-2">ログイン</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
    <v-card v-if="loginStatus === true &&loginUser.displayName === null">
      <span>こんにちは</span>
      <router-link :to="{name:'myPageTop'}">名前未設定</router-link>
      <span>さん</span>
    </v-card>
    <v-card v-if="loginStatus === true &&loginUser.displayName !== null">
      <span>こんにちは</span>
      <router-link :to="{name:'myPageTop'}">{{loginUser.displayName}}</router-link>
      <span>さん</span>
    </v-card>
    <v-btn v-if="loginStatus ===true" class="ml-3" @click="toLogout()">
      <span class="mr-2">ログアウト</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("loginUser", ["logout"]),
    ...mapActions(["RESET_VUEX_STATE", "setLoginStatus", "firebaseLogout"]),
    toLoginPage() {
      this.$router.push({ name: "Login" });
    },
    toHomePage() {
      this.$router.push({ name: "Home" });
    },
    toLogout() {
      Promise.resolve()
        .then(() => {
          this.RESET_VUEX_STATE();
          this.setLoginStatus(false);
          this.firebaseLogout();
        })
        .then(() => {
          this.$router.push({ name: "Home" });
        });
    },
  },
  computed: {
    loginUser() {
      return this.$store.state.loginUser;
    },
    loginStatus() {
      return this.$store.state.loginStatus;
    },
  },
};
</script>
