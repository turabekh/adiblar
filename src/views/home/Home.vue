<template>
  <v-row class="home">
    <v-col cols="12">
        <div class="hero-section">
            <div class="title">
                <h1>ADABIYOT GULSHANI</h1>
                <p class="subtitle">
                  BILIM VA SAN'AT DUNYOSI
                </p>
            </div>
            <HeroSection />
        </div>
        
    </v-col>
  </v-row>
</template>

<script>
import HeroSection from "@/views/home/components/HeroSection.vue";
export default {
  name: "Home",
  components: {
    HeroSection,
  },
};
</script>

<style scoped>
.home {
  background-image: url("/bg-2.jpg") !important;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  gap: 200px;
}

.title {
  text-align: center;
  color: white;
  font-size: large;
}

@media (max-width: 600px) {
    .hero-section {
        gap: 100px;
    }
}
</style>