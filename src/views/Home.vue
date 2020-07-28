<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ArticleList/>>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ArticleList from '@/components/article/ArticleList.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    ArticleList
  }
}
</script>
