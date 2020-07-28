<template>
    <div>
<v-form>
      <v-text-field label="Title"></v-text-field>
      <v-text-field label="content"></v-text-field>
      <v-select label="category" :items="items" v-model="categoryId" required></v-select>
    </v-form>
    </div>
</template>

<script>
export default {
    name:"ArticleRegister",
    data(){
        return{
            categoryId: null,
      items: [
        {
          category1: 1,
        },
        {
          category1: 2,
        },
        {
          category1: 2,
        },
      ],

        }
    },

}
</script>