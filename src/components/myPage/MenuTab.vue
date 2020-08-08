<template>
  <div>
    <v-tabs fixed-tabs background-color="indigo" dark>
      <v-tab @click="toTopMenu" v-model="topMenu">トップメニュー</v-tab>
      <v-tab @click="toRegisterNewArticle" v-model="registerArticle">新規投稿</v-tab>
      <v-tab @click="toArticleHistory" v-model="articleHistory">履歴</v-tab>
      <v-tab @click="toSettingPage" v-model="setting">各種設定</v-tab>
    </v-tabs>
  </div>
</template>


<script>
export default {
  data(){
    return{
      topMenu:true,
      registerArticle:false,
      articleHistory:false,
      setting:false
    }
  },

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