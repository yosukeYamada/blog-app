<template>
  <div>
    <vue-loading v-if="loading"></vue-loading>
    <div v-if="!loading">
      <v-container>
        <v-row v-for="(article,index) in articleList" :key="index">
          <v-col cols="12" md="12">
            <v-card class="mx-auto" @click="toArticleDetail(article.articleId)">
              <v-card-title>
                <div>{{article.articleTitle}}</div>
              </v-card-title>
              <v-card-text>
                <div style="white-space:pre-wrap; word-wrap:break-word;">{{article.articleContent}}</div>
                <div>tag</div>
                <div>{{article.categoryId}}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>


<script>
import { VueLoading } from "vue-loading-template";
import { mapActions } from "vuex";
export default {
  name: "ArticleList",
  components: {
    VueLoading,
  },
  data() {
    return {
      articleList: [],
      loading: false,
    };
  },
  methods: {
    ...mapActions(["setArticleList"]),
    getArticleList() {
      this.$axios
        .get("/article")
        .then((response) => {
          this.articleList = response.data;
          this.setArticleList(response.data);
        })
        .catch((error) => {
          console.log(error);
          alert("みっす");
        });
    },
    toArticleDetail(articleId) {
      this.$router.push({
        name: "ArticleDetail",
        params: { articleId: articleId },
      });
    },
  },
  created() {
    Promise.resolve()
      .then(() => {
        this.loading = true;
      })
      .then(() => {
        this.getArticleList();
      })
      .then(() => {
        this.loading = false;
      });
  },
};
</script>