<template>
  <div>
    <v-tabs fixed-tabs background-color="indigo" dark>
      <v-tab @click="toTopMenu">トップメニュー</v-tab>
      <v-tab @click="toRegisterNewArticle">新規投稿</v-tab>
      <v-tab @click="toArticleHistory">履歴</v-tab>
      <v-tab @click="toSettingPage">各種設定</v-tab>
    </v-tabs>
  </div>
</template>


<script>
export default {

methods:{
  toTopMenu(){
    this.$router.push("/myPage/top")
  },
  toRegisterNewArticle(){
    this.$router.push("/myPage/registerArticle")
  },
  toArticleHistory(){
    this.$router.push("/myPage/articleHistory")
  },
  toSettingPage(){
    this.$router.push("/myPage/setting")
  }
}







};
</script>