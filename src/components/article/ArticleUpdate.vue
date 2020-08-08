<template>
      <div>
    <v-form id="post-form">
      <p>タイトル</p>
      <v-text-field label="Title" v-model="article.articleTitle" single-line solo></v-text-field>
      <div id="editor">
        <p>内容</p>  
        <v-textarea label="content" v-model="article.articleContent" single-line solo></v-textarea>
      </div>
      <v-spacer></v-spacer>
      <div>カテゴリー</div>
      <v-select
        label="category"
        :items="items"
        item-text="categoryName"
        item-value="categoryId"
        v-model="article.categoryId"
        required
        solo
      ></v-select>
      <v-btn @click="updateArticle()">更新</v-btn>
      <v-btn @click="clear()">削除</v-btn>
    </v-form>
    <v-spacer/>
    <v-divider></v-divider>
    <v-container>
      <p>プレビュー</p>
    <ArticleDetail :article="article"/>
    </v-container>
    <!-- <div id="preview">
      <div v-html="compiledMarkdown"></div>
    </div> -->
  </div>
</template>


<script>
import ArticleDetail from "./ArticleDetail.vue"
import marked from "marked";
import hljs from "highlightjs";
import {mapActions} from "vuex"
export default {
  name: "ArticleRegister",
  components:{
    ArticleDetail

  },
  data() {
    return {
        // articleId:null,
      // articleTitle: "",
      // articleContent: "",
      // categoryId: null,
      // version:null,
      items: [
        {
          categoryName: "Java",
          categoryId: 1,
        },
        {
          categoryName: "JavaScript",
          categoryId: 2,
        },
        {
          categoryName: "CSS",
          categoryId: 3,
        },
      ],
    };
  },
  
  methods: {
    ...mapActions(["setArticleList"]),
    updateArticle() {
        let URL = "/article"+"/"+this.articleId
      this.$axios
        .put(URL, {
          blogId: 1,
          articleId:this.article.articleId,
          articleTitle: this.article.articleTitle,
          articleContent: this.article.articleContent,
          categoryId: this.article.categoryId,
          version:this.article.version,
          updateUserId: 1,
        })
        .then((response) => {
          let articleList = this.$store.state.articleList.filter(article=>{
            return article.articleId !== response.data.articleId
          })
          articleList.push(response.data)
          this.setArticleList(articleList)
          alert("更新が完了しました")
          this.$router.push({name:"ArticleDetail",params:response.data.articleId})
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clear() {
      this.article.articleTitle= "",
      this.article.articleContent= "",
      this.article.categoryId= null
    },
  },
  created() {
    marked.setOptions({
      langPrefix: "hljs language-",
      highlight(code, lang) {
        return hljs.highlightAuto(code, [lang]).value;
      },
    });
    // this.articleId = this.$route.params.articleId;
    // this.version = this.article.version
    // this.categoryId=this.article.categoryId
    // this.articleTitle = this.article.articleTitle
    // this.articleContent = this.article.articleContent
  },
  computed: {
    compiledMarkdown() {
      return marked(this.articleContent);
    },
    article(){
      let articleId = this.$route.params.articleId;
      return this.$store.state.articleList.find(article=>{
        return article.articleId === articleId
    })
    }
  },
};
</script>
<style src='highlightjs/styles/solarized_dark.css'></style>

<style>
  .v-input{
    font-size: 1.5em;
  }
  .v-input .v-label{
    font-size: 1em;
  }
  .v-application code{
    background-color : white
  }
</style>