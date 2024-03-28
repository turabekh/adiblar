<template>
    <v-container>
      <v-row style="padding: 20px;">
        <v-col cols="12">
          <v-tabs v-model="tab" background-color="cyan darken-3" dark grow>
            <v-tab key="national">Milliy Adabiyot</v-tab>
            <v-tab key="world">Jahon Adabiyoti</v-tab>
  
            <v-tab-item key="national" style="padding: 20px;">
              <v-row>
                <v-col v-for="(book, index) in nationalBooks" :key="index" cols="12" sm="6" md="4">
                  <v-card class="mx-auto" min-height="344" max-width="344" elevation="5">
                    <v-img :src="book.img" height="200"></v-img>
                    <v-card-title class="justify-center">
                      <div>{{ book.title }}</div>
                    </v-card-title>
                    <v-card-actions class="justify-center">
                      <v-btn color="cyan darken-3" style="color: white;" :href="book.link" target="_blank">Yuklab oling</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-tab-item>
  
            <v-tab-item key="world" style="padding: 20px;">
              <v-row>
                <v-col v-for="(book, index) in worldBooks" :key="index" cols="12" sm="6" md="4">
                  <v-card class="mx-auto" min-height="344" max-width="344" elevation="5">
                    <v-img :src="book.img" height="200"></v-img>
                    <v-card-title class="justify-center">
                      <div>{{ book.title }}</div>
                    </v-card-title>
                    <v-card-actions class="justify-center">
                      <v-btn color="cyan darken-3" style="color: white;" :href="book.link" target="_blank">Yuklab oling</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
    import { BOOKS } from "@/data/books.js";
  export default {
    data() {
      return {
        books: BOOKS,
        tab: 'national'
      };
    },
    computed: {
      nationalBooks() {
        return this.books.filter(book => book.type === 'national');
      },
      worldBooks() {
        return this.books.filter(book => book.type === 'world');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  .v-tabs__items {
    justify-content: space-between;
  }
  </style>
  