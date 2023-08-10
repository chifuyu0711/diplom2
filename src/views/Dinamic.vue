<template>
  <div v-for="prod in store.products" :key="prod" class="dinamic container">
    <div v-if="prod.id == route.params.id" class="dinamic__item">
      <img :src="prod.thumbnail" alt="" class="dinamic__item_img">
      <h2 class="dinamic__item_title">{{ prod.title }}</h2>
      <p class="dinamic__item_price">Цена: {{ prod.price }} $</p>
      <p class="dinamic__item_description">Описание: {{ prod.description }}</p>
    </div>
  </div>
    <router-link :to="'/'" class="pver"> Назад </router-link>
</template>
  
<script setup>
import { productStore } from "@/stores/product.js";
import { useRoute } from "vue-router";

const store = productStore();
store.getProduct()
const route = useRoute();




</script>
