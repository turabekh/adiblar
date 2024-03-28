<template>
    <div style="height: 100%;">
      <iframe
        ref="iframe"
        :src="iframeSrc"
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="yes"
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        iframeSrc: "https://uzbekistan360.uz/ru/location/adiblar-khijoboniaag"
      };
    },
    methods: {
      reloadIframe() {
        // Reload iframe content
        this.$refs.iframe.src = this.iframeSrc;
      }
    },
    mounted() {
      // You can reload iframe content after a certain time or event if needed
      // For example, reload iframe content after 10 seconds
      // setTimeout(() => {
      //   this.reloadIframe();
      // }, 10000);
    }
  };
  </script>
  