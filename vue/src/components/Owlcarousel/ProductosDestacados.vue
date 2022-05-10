<template>
  <div class="home">
    <Carousel
      :navigation="true"
      :pagination="true"
      :startAutoPlay="false"
      :timeout="5000"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <Slide v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
           <img :src="(`./src/assets/imagenes/Categorias/${slide}.jpg`)" alt="" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
import Slide from "./Slide.vue";
export default {
  name: "Home",
  components: { Carousel, Slide },
  setup() {
    const carouselSlides = ["0", "1", "2", "3" , "4" , "5" , "6" , "7"];
    return { carouselSlides };
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  max-height: 100vh;
  height: 100vh;
  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
    img {
      min-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>