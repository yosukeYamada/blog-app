<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/common/Header.vue";
import { mapActions } from "vuex";
export default {
  name: "App",

  components: {
    Header,
  },

  data: () => ({
    //
  }),
  methods:{
        ...mapActions(["setArticleList","setCategoryList"]),
    getArticleList() {
      this.$axios
        .get("/article")
        .then((response) => {
          // this.articleList = response.data;
          this.setArticleList(response.data);
        })
        .catch((error) => {
          console.log(error);
          alert("みっす");
        });
    },
    getCategoryList(){
      this.$axios.get("/category")
      .then(response=>{
        this.setCategoryList(response.data)
      })
    }
  },
  created() {
        this.getArticleList();
        this.getCategoryList();
  },
};
</script>
