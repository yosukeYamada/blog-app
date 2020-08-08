<template>
  <div>
    <v-card elevation="10">
      <v-row>
        <v-col cols="12" md="12">
          <v-spacer></v-spacer>
          <v-card-title :class="[`text-h3`]">{{article.articleTitle}}</v-card-title>
          <v-spacer></v-spacer>
          <v-card-text>
            <div class="text--primary" style="white-space:pre-wrap; word-wrap:break-word;">
              <div v-html="compiledMarkdown" :class="[`text-body-1`]"></div>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <v-card-text>投稿日 : {{article.date}}</v-card-text>
          <p>{{article}}</p>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import marked from "marked";
import hljs from "highlightjs";
export default {
  props:{
    article:Object
  },
  data() {
    return {
      // article: "",
      // articleContent: "",
      markdownText: "",
    };
  },
  created() {
    marked.setOptions({
      // code要素にdefaultで付くlangage-を削除
      langPrefix: "hljs language-",
      // highlightjsを使用したハイライト処理を追加
      highlight(code, lang) {
        return hljs.highlightAuto(code, [lang]).value;
      },
    });
    // let articleId = this.$route.params.articleId;
    // this.article = this.$store.state.articleList.find((article) => {
    //   return article.articleId === articleId;
    // });
    // this.articleContent = this.article.articleContent;
  },
  computed: {
    articleContent(){
      return this.article.articleContent
    },
    compiledMarkdown() {
      return marked(this.articleContent);
    },
  },
  mounted() {
    hljs.initHighlighting();
  },
};
</script>
<style src='highlightjs/styles/solarized_dark.css'></style>
<style scoped>
.v-card-title {
  font-size: 3.5em;
}
</style>