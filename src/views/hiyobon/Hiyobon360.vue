<template>
  <div style="position: relative; height: 100%;">
    <div class="hide-text">
      ADIBLAR XIYOBONI
    </div>
    <iframe
      ref="iframe"
      :src="iframeSrc"
      width="100%"
      height="100%"
      frameborder="0"
      scrolling="yes"
    ></iframe>
    <div class="scrolling-text"></div>
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
    // Initialization code can go here
  }
};
</script>

<style>
.scrolling-text {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0,151,167, 0.7); /* Semi-transparent black background */
  color: white; /* White text color */
  white-space: nowrap;
  overflow: hidden;
  padding: 10px 0; /* Some padding to ensure text is vertically centered */
}

.hide-text {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #00838F; /* Semi-transparent black background */
  color: white; /* White text color */
  white-space: nowrap;
  overflow: hidden;
  padding: 10px 0; /* Some padding to ensure text is vertically centered */
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  line-height: 1.8;

}

.scrolling-text::after {
  content: 'https://uzbekistan360.uz saytidan olindi';
  display: inline-block;
  padding-left: 100%;
  animation: scroll 20s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
