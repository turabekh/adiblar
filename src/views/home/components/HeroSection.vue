<template>
  <div>
    <div class="gallery">
      <span style="--i: 1">
        <img src="adiblar/aleksandr.jpg" alt="" />
      </span>
      <span style="--i: 2">
        <img src="adiblar/aoripov.jpg" alt="" />
      </span>
      <span style="--i: 3">
        <img src="adiblar/aqahhor.jpg" alt="" />
      </span>
      <span style="--i: 4">
        <img src="adiblar/avloniy.jpg" alt="" />
      </span>
      <span style="--i: 5">
        <img src="adiblar/behbudiy.jpg" alt="" />
      </span>
      <span style="--i: 6">
        <img src="adiblar/cholpon.jpg" alt="" />
      </span>
      <span style="--i: 7">
        <img src="adiblar/evohidov.jpg" alt="" />
      </span>
      <span style="--i: 8">
        <img src="adiblar/furqat.jpg" alt="" />
      </span>
    </div>
  </div>
</template>

<style scoped>
.gallery-container {
  display: grid;
  place-items: center;
}
.gallery {
  position: relative;
  width: 350px;
  height: 240px;
  transform-style: preserve-3d;
  animation: rotate 35s linear infinite;
}

@keyframes rotate {
  from {
    transform: perspective(1200px) rotateY(0deg);
  }

  to {
    transform: perspective(1200px) rotateY(360deg);
  }
}

.gallery span {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center;
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--i) * 45deg)) translateZ(450px);
}

.gallery span img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 600px) {
  .gallery {
    width: 240px; /* Reduced size for smaller screens */
    height: 170px;
  }
  
  .gallery span {
    transform: rotateY(calc(var(--i) * 45deg)) translateZ(300px); /* Adjusted for smaller gallery size */
  }
}
</style>