<template>
  <v-container>
    <v-row align="center" style="padding: 20px">
      <v-col class="col-md-4 col-sm-1" v-for="(adib, index) in adiblar" :key="adib.id">
        <v-card>
          <v-img @click="showDetailsPage(adib.id)" style="cursor: pointer; height: 100%; width: 100%" :src="adib.image"></v-img>

          <v-card-title>{{ adib.title }}</v-card-title>

          <v-card-subtitle>{{ adib.subtitle }}</v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text @click="showDetailsPage(adib.id)">
              To'liq Ma'lumot
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="toggleShow(index)">
              <v-icon>{{ adib.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="adib.show">
              <v-divider></v-divider>
              <v-card-text>{{ adib.text }}</v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ADIBLAR } from '../../data/adiblar';
export default {
  data: () => ({
    adiblar: ADIBLAR.map(adib => ({ ...adib, show: false })) // Add initial show state to each item
  }),
  methods: {
    toggleShow(index) {
      this.adiblar[index].show = !this.adiblar[index].show;
    },
    showDetailsPage(id) {
      // Navigate to the details page using Vue Router
      this.$router.push({ name: 'details', params: { id } });
    }
  }
};
</script>
