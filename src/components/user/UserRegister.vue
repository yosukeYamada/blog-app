<template>
    <div>
        <v-form>
            <v-text-field label="ユーザID" v-model="userId"></v-text-field>
            <v-text-field label=”パスワード v-model="password"></v-text-field>
            <v-btn @click="registerUser()">新規登録</v-btn>
        </v-form>

    </div>
</template>



<script>
import firebase from "firebase"
import {mapActions} from "vuex"
export default {
    data(){
        return{
            userId:"",
            password:""
        }
    },
    methods:{
        ...mapActions(["setLoginUser","setLoginStatus"]),

        registerUser(){
            firebase.auth().createUserWithEmailAndPassword(this.userId,this.password)
            .then(response=>{
                this.setLoginUser(response)
                this.setLoginStatus(true)
                this.$router.push("top")
            })
            .catch(error=>{
                var errorCode = error.code
                var errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            })

        }




    }
    
}
</script>