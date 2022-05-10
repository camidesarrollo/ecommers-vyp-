<template>
  <PageComponent title="Dashboard">
    <div v-if="loading" class="flex justify-center">Loading...</div>
    <div v-else class="my-8">
      <CardInfo />
      <CardPacking />
      <Categorias />
      <div class="pt-5">
        <div class="mb-5">
          <h1 class="font-bold text-center text-4xl">
            Somos líderes en la industria del packaging de productos asociados a
            cartulina, cartón corrugado y microcorrugado.
          </h1>
        </div>
      </div>
      <CardInfoFooter />
      <ProductosDestacados/>
      <Test/>
    </div>
  </PageComponent>
</template>

<script setup>
import { computed } from "vue";
import { EyeIcon, PencilIcon } from "@heroicons/vue/solid";
import PageComponent from "../components/PageComponent.vue";
import CardInfo from "../components/Card/CardInfo.vue";
import CardPacking from "../components/Card/CardPacking.vue";
import Categorias from "../components/Owlcarousel/Categorias.vue";
import CardInfoFooter from "../components/Card/CardInfoFooter.vue";
import ProductosDestacados from "../components/Owlcarousel/ProductosDestacados.vue"
import Test from "../components/Owlcarousel/Test.vue";
</script>

