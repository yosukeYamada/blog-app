<template>
  <div>
    <v-form id="post-form">
      <v-row>
        <v-col>
          <p>タイトル</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field label="Title" v-model="articleTitle" single-line solo></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>内容</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-textarea label="content" v-model="articleContent" single-line solo></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>カテゴリー</div>
        </v-col>
        <v-col>
          <CategoryAddModal/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-select
            label="category"
            :items="items"
            item-text="categoryName"
            item-value="categoryId"
            v-model="categoryId"
            required
            solo
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="registerArticle()">送信</v-btn>
          <v-btn @click="check()">削除</v-btn>
        </v-col>
      </v-row>
    </v-form>
    <div id="preview">
      <div v-html="compiledMarkdown"></div>
    </div>
    <p>{{categoryId}}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import marked from "marked";
import hljs from "highlightjs";
import CategoryAddModal from "../category/CategoryAddModal.vue"
export default {
  name: "ArticleRegister",
  components:{
CategoryAddModal
  },
  data() {
    return {
      modal:false,
      articleTitle: "",
      articleContent: "",
      categoryId: null,
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
    ...mapActions(["addArticleList"]),
    registerArticle() {
      this.$axios
        .post("/article", {
          blogId: 1,
          articleTitle: this.articleTitle,
          articleContent: this.articleContent,
          categoryId: this.categoryId,
          registerUserId: 1,
        })
        .then((response) => {
          this.addArticleList(response.data);
          alert("投稿しました。");
          this.$router.push({
            name: "articleDetail",
            params: response.data.articleId,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    check() {
      this.$axios
        .get("/article/aaaaaaa/r4th")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    openModal(){
      this.modal=true
    }
  },
  created() {
    marked.setOptions({
      langPrefix: "hljs language-",
      highlight(code, lang) {
        return hljs.highlightAuto(code, [lang]).value;
      },
    });
  },
  computed: {
    compiledMarkdown() {
      return marked(this.articleContent);
    },
  },
};
</script>
<style src='highlightjs/styles/solarized_dark.css'></style>

<style>
.v-input {
  font-size: 1.5em;
}
.v-input .v-label {
  font-size: 1em;
}
.v-application code {
  background-color: white;
}
</style>