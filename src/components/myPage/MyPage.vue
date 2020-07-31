<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <MenuTab />
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-row>
        <v-col cols="12" md="12">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MenuTab from "./MenuTab.vue";
export default {
  components: {
    MenuTab,
  },
};
</script>