<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title @click="toHomePage()">JavaとかVueとか</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn @click="toLoginPage()" v-if="loginUser === null">
      <span class="mr-2">ログイン</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
    <v-card v-else-if="loginUser.user.displayName === null">
      <span>こんにちは</span>
      <router-link :to="{name:'myPageTop'}">名前未設定</router-link>
      <span>さん</span>
    </v-card>
    <v-card v-else>
      <span>こんにちは</span>
      <router-link :to="{name:'myPageTop'}">{{loginUser.user.displayName}}</router-link>
      <span>さん</span>
    </v-card>
    <v-btn v-if="loginUser !== null" class="ml-3"><span class="mr-2">ログアウト</span></v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    toLoginPage() {
      this.$router.push({ name: "Login" });
    },
    toHomePage() {
      this.$router.push({ name: "Home" });
    },
  },
  computed: {
    loginUser() {
      return this.$store.state.loginUser;
    },
  },
};
</script>
