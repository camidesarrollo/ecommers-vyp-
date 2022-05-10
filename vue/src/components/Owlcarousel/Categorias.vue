<template>
  <div class="pt-5">
    <div class="mb-5">
      <h2
        style="font-size: 1.125rem; line-height: 1; text-align: center"
        class="font-bold items-center border-y-gray-500 heading-tag"
      >
        CATEGORIAS
      </h2>
    </div>
    <div class="mb-3">
      <div
        :items="3"
        loop
        autoplay
        autoplay-speed="5000"
        :autoplay-timeout="500"
        :rewind="false"
      >
       <div v-for="(item, index) in category" :key="index">{{ index }}. {{ item }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import carousel from "vue-owl-carousel";

const route = useRoute();
const store = useStore();

store.dispatch("getDataCategories");

const category = computed(() => store.state.category.data);

</script>
