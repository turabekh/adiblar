<template>
  <v-container>
    <v-row style="margin-top: 40px; margin-bottom: 50px">
      <v-col cols="10" offset="1">
        <v-img :src="selectedAdib.image" aspect-ratio="1"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h1 style="text-align: center">{{ selectedAdib.title }}</h1>
        <h3 style="text-align: center">{{ selectedAdib.subtitle }}</h3>
        <div class="details" v-html="selectedAdib.details"></div>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
import { ADIBLAR } from "../../data/adiblar";
export default {
  data() {
    return {
      selectedAdib: {},
      adiblar: ADIBLAR,
    };
  },
  created() {
    this.selectedAdib = this.adiblar.find(
      (adib) => adib.id === parseInt(this.$route.params.id)
    );
    this.selectedAdib.details = this.selectedAdib.details.replace(
      /(?:\r\n|\r|\n)/g,
      ""
    );
    // replace h5 to h3 
    this.selectedAdib.details = this.selectedAdib.details.replace(/h5/g, "h3");
    // add style to h3 tags color: gray and font-size: 20px and margin-bottom: 10px
    this.selectedAdib.details = this.selectedAdib.details.replace(/<h3/g, "<h3 style='color: #212121; font-size: 20px; margin-bottom: 10px'");
  },
};
</script>
  
  <style scoped>
    .post-content {
        padding: 20px;
    }
</style>
  