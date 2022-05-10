<template>
  <div>
    <carousel>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      perPage: 4,
      selectedIndex: 0,
    };
  },
  computed: {
    slides() {
      return Array.from(Array(10).keys()).map((item) => item + 1);
    },
  },
  methods: {
    slideClick(index) {
      console.log("Slide index: ", index);
    },
    handleButtonClick(index) {
      const maxIndexAbleClick = this.slides.length - this.perPage;
      this.selectedIndex =
        index <= maxIndexAbleClick ? index : maxIndexAbleClick;
      console.log("new index", this.selectedIndex);
    },
  },
  setup() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.slide-item {
  height: 200px;
  padding: 0 10px;
  cursor: pointer;
  img {
    max-width: 100%;
  }
}
.image {
  width: 200px;
  aspect-ratio: 1;
}
</style>
