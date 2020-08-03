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
import firebase from "firebase";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      userId: null,
      password: null,
    };
  },
  methods: {
    ...mapActions(["setLoginUser", "setLoginStatus"]),

    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.userId, this.password)
        .then((response) => {
          this.setLoginUser(response);
          this.setLoginStatus(true);
            this.$router.push({ path: "/myPage/top" });
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        })
    },
  },
};
</script>