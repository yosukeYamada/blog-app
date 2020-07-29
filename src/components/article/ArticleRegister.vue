<template>
  <div>
    <v-form>
      <v-text-field label="Title" v-model="articleTitle"></v-text-field>
      <v-textarea label="content" v-model="articleContent"></v-textarea>
      <v-select label="category" :items="items" item-text="categoryId" item-value="categoryId" v-model="categoryId" required></v-select>
      <v-btn @click="registerArticle()">送信</v-btn>
      <v-btn @click="check()">削除</v-btn>
    </v-form>
    <p>{{categoryId}}</p>
  </div>
</template>

<script>
export default {
  name: "ArticleRegister",
  data() {
    return {
      articleTitle:null,
      articleContent:null,
      categoryId: null,
      items: [
        {
          categoryId: 1,
        },
        {
          categoryId: 2,
        },
        {
          categoryId: 3,
        },
      ],
    }
  },
  methods:{
    registerArticle(){
      console.log("aa")
      this.$axios.post("/article",{
        blogId:1,
        articleTitle:this.articleTitle,
        articleContent:this.articleContent,
        categoryId:this.categoryId,
        registerUserId:1
      })
      .then(response=>{
        console.log(response)
      }).catch(error=>{
        console.log(error)
      })
    },
    check(){
      this.$axios.get("/article/aaaaaaa/r4th")
      .then(response=>{
        console.log(response)
      })
      .catch(error=>{
        console.log(error)
      })
    }
  }
};
</script>