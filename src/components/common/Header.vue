<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title @click="toHomePage()">JavaとかVueとか</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn @click="toLoginPage()">
      <span class="mr-2">ログイン</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
    methods:{
        toLoginPage(){
            this.$router.push({name:"Login"})
        },
        toHomePage(){
          this.$router.push({name:"Home"})
        }
    }
}
</script>
