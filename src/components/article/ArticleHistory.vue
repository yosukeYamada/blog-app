<template>
  <div>
    <p>articlehistory</p>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-data-table :headers="headers" :items="articleList">
            <template v-slot:body="{items}" @click="aa()">
              <tbody>
                <tr v-for="item in items" :key="item.articleId">
                  <td>
                    <router-link
                      :to="{name:'ArticleDetail',
                  params:{articleId:item.articleId}
                }"
                    >{{item.articleTitle}}</router-link>
                  </td>
                  <td>{{item.categoryId}}</td>
                  <td><router-link
                      :to="{name:'ArticleUpdate',
                  params:{articleId:item.articleId}
                }"
                    >{{item.articleId}}</router-link>
                    </td>
                </tr>
              </tbody>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
export default {
  computed: {
    headers() {
      let headers = [
        {
          text: "タイトル",
          value: "articleTitle",
        },
        {
          text: "カテゴリー",
          value: "categoryId",
        },
        {
          text:"編集",
          value:"articleId"
        }
      ];
      return headers;
    },
    articleList() {
      let articleList = this.$store.state.articleList;
      let items = [];
      articleList.forEach((article) => {
        let item = {};
        item["articleTitle"] = article.articleTitle;
        item["categoryId"] = article.categoryId;
        item["articleId"] = article.articleId;
        items.push(item);
      });
      return items;
    },
  },
  methods: {
    aa() {
    },
  },
};
</script>