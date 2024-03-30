<template>
  <v-app style="background-color: #E0E0E0 !important;">
    <v-navigation-drawer v-model="drawer" color="cyan darken-1" app style="min-height: 100vh;">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 white-text">ADABIYOT</v-list-item-title>
          <v-list-item-subtitle class="white-text"> GULSHANI </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider color="white"></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.id" link :to="item.to">
          <v-list-item-content>
            <v-list-item-title class="white-text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" class="custom-app-bar">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer" class="white-text"></v-app-bar-nav-icon>

      <v-app-bar-title class="white-text">ADABIYOT GULSHANI</v-app-bar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="full">
      <router-view></router-view>
    </v-main>
    <v-footer fixed app color="cyan darken-3" padless class="mt-8" style="z-index: 3000;">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in items"
          :key="link.id"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.to"
        >
          {{ link.title }}
        </v-btn>
        <v-col class="cyan darken-4 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Yahyobek Kamolov</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      {  id: 1, title: "BOSH SAHIFA", to: "/" },
      {  id: 2, title: "ADIBLAR HAQIDA",  to: "/adiblar-haqida" },
      {  id: 3, title: "ADIBLAR HIYOBONI 360", to: "/hiyobon360" },
      {  id: 5, title: "KITOBLAR", to: "/kitoblar" },
      {  id: 4, title: "TARG'IBOT", to: "/targibot" },
    ],
  }),
};
</script>

<style>
.custom-app-bar {
  background-image: url("/bg-1.png");
  background-size: 3500px !important; /* Cover the width, adjust height automatically */
  background-position: center center;
  background-repeat: no-repeat;
}
.white-text {
  color: white !important;
}
</style>