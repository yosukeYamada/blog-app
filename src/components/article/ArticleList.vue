<template>
  <div>
    <v-row v-for="n in 5" :key="n">
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-card-title>
            <div>title</div>
          </v-card-title>
          <v-card-text>
            <div>content</div>
            <div>tag</div>
            <div>category</div>
            <p>{{n}}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script>
export default {
  name: "ArticleList",
  components: {},
  data(){
    return{
      articleList:[]
    }
  },
  methods:{
    getArticleList(){
      this.$axios.get("/article")
      .then(response=>{
        this.articleList=response.data
      })
      .catch(error=>{
        console.log(error)
        alert("みっす")
      })
    }
  }
};
</script>