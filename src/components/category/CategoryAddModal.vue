<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          カテゴリーを新規登録する
        </v-btn>
        <p>{{categoryList}}</p>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">カテゴリー追加</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field label="カテゴリー名" single-line solo required v-model="newCategoryName"></v-text-field>
                <p>{{newCategoryName}}</p>
              </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-list>
                        <v-list-item-group>
                            <v-list-item v-for="(item,index) in categoryList" :key="index">
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.categoryName"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                        </v-list-item-group>
                    </v-list>
                </v-col>
            </v-row>
              <!-- <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete> -->
              <!-- </v-col> -->
          </v-container>
          <!-- <small>*indicates required field</small> -->
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="registerNewCategory()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {mapActions} from "vuex"
export default {
    data(){
        return{
            dialog:false,
            categoryList:[],
            newCategoryName:""
        }
    },
    created(){
        this.categoryList = this.$store.state.categoryList
    },
    methods:{
      ...mapActions(["addCategoryList"]),
      registerNewCategory(){
        this.$axios.post("/category",{
          categoryName:this.newCategoryName,
          registerUserId:1,
        })
        .then(response=>{
          this.addCategoryList(response.data);
          this.dialog = false
        })
        .catch(error=>{
          console.log(error)
          alert("しっぱい")
          this.dialog = false
        })

      }
    }
    
}
</script>