<template>
  <div>
    <v-container>
      <ArticleDetail :article="article"/>
    </v-container>
  </div>
</template>

<script>

import ArticleDetail from "../components/article/ArticleDetail.vue";
export default {
  data(){
    return{
      markdownText:"",
      // article:null
    }
  },
  computed:{
    articleId(){
      return this.$route.params.articleId;
    },
    article(){
      return this.$store.state.articleList.find((article) => {
        return article.articleId === this.articleId;
      });

    }
  },
  // created(){

  // },
  components: {
    ArticleDetail,
  },
};
</script>

<style src='highlightjs/styles/github-gist.css'></style>