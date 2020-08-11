<template>
  <div>
    <v-form>
      <v-text-field label="ユーザID" v-model="userId"></v-text-field>
      <v-text-field label="”パスワード" v-model="password"></v-text-field>
      <v-btn @click="login">ログイン</v-btn>
    </v-form>
    <router-link to="/registerUser">未登録のかたはこちら</router-link>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      userId: null,
      password: null,
    };
  },
  methods: {
    ...mapActions(["firebaseLogin"]),

    login() {
      this.firebaseLogin({userId:this.userId,password:this.password})
     
    },
  },
};
</script>