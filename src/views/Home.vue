<template>
  <div class="home">
    <ArticleList/>
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleList from '@/components/article/ArticleList.vue'


export default {
  name: 'Home',
  components: {
    ArticleList
  }
}
</script>
