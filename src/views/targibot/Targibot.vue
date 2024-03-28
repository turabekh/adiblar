<template>
  <v-container fluid>
    <div style="display: flex; justify-content: center; align-items: center; height: 80vh;">
      <v-carousel cycle :interval="5000" style="height: 80% !important;">
        <v-carousel-item
          v-for="(testimonial, index) in testimonials"
          :key="index"
          style="height: 100%"
        >
          <v-sheet
            :color="index % 2 === 0 ? 'primary' : 'secondary'"
            dark
            class="pa-12"
            tile
            style="height: 100%"
          >
            <v-row align="center" style="height: 100%">
              <v-col cols="12" md="4">
                <v-img
                  :src="testimonial.testimonialImg"
                  @error="handleImageError"
                  class="white--text"
                  style="height: 100%; width: 100%; object-fit: cover"
                ></v-img>
              </v-col>
              <v-col cols="12" md="8">
                <div class="headline white--text">
                  {{ testimonial.testimonialText }}
                </div>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </v-container>
</template>

<script>
import { TESTIMONIALS } from "@/data/testimonials.js";

export default {
  data() {
    return {
      testimonials: TESTIMONIALS,
    };
  },
  methods: {
    handleImageError(event) {
      event.target.src = "https://placehold.co/600x400"; // Replace with your placeholder image URL
    },
  },
};
</script>
