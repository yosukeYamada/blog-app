<template>
  <div>
    <v-container>
      <ArticleDetail />
    </v-container>
  </div>
</template>

<script>

import ArticleDetail from "../components/article/ArticleDetail.vue";
export default {
  data(){
    return{
      markdownText:""
    }
  },
  components: {
    ArticleDetail,
  },
};
</script>

<style src='highlightjs/styles/github-gist.css'></style>