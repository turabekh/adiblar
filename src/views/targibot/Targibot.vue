<template>
  <div style="margin-top: 100px">
    <v-carousel cycle hide-delimiters class="px-3">
      <v-carousel-item
        v-for="(testimonial, index) in testimonials"
        :key="index"
      >
        <v-sheet
          :color="index % 2 === 0 ? 'teal darken-1' : 'teal lighten-2'"
          dark
          class="pa-6"
          tile
          height="100%"
        >
          <v-row align="center" justify="center" class="fill-height">
            <v-col cols="12" md="6">
              <v-img
                :src="testimonial.testimonialImg"
                @error="handleImageError"
                class="white--text"
                contain
              ></v-img>
            </v-col>
            <v-col cols="12" md="6" class="text-center">
              <div class="headline white--text">
                {{ testimonial.testimonialText }}
              </div>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
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

<style scoped>
.fill-height {
  height: 100%;
}
</style>
