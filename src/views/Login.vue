<template>
    <div>
        <v-form>
            <v-text-field label="ユーザID"></v-text-field>
            <v-text-field label=”パスワード></v-text-field>
            <v-btn @click="toRegisterArticle">ログイン</v-btn>
        </v-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userId:null,
            password:null
        }
    },
    methods:{
        toRegisterArticle(){
            this.$router.push({path:"/myPage/top"})
        }
    }
}
</script>