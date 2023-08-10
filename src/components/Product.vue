<template>
  <div class="pages">
    <div class="pages__item" v-for="product in store.sortProducts" :key="product">
      <router-link :to="'product/' + product.id">
        <img :src="product.thumbnail" alt="photo" class="pages__item_img" />
      </router-link>
      <router-link :to="'product/' + product.id">
        <h2 class="pages__item_title">{{ product.title }}</h2>
      </router-link>
      <p class="pages__item_price">Цена: {{ product.price }} $</p>
      <p class="pages__item_description">Описание: {{ product.description }}</p>
    </div>
  </div>
  <div class="btn">
    <button @click="prevPage()">Prev</button>
    <button @click="nextPage()">Next</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { productStore } from "@/stores/product.js";

const store = productStore();
store.getProduct();

let pagesCount = ref(0);

store.sortProducts = store.products.slice(pagesCount.value, pagesCount.value + 12);

function nextPage() {
  if (pagesCount.value <= 84) {
    pagesCount.value += 12;
    console.log(pagesCount.value);
    store.sortProducts = store.products.slice(pagesCount.value, pagesCount.value + 12);
  }
}
function prevPage() {
  if (pagesCount.value >= 12) {
    pagesCount.value -= 12;
    console.log(pagesCount.value);
    store.sortProducts = store.products.slice(pagesCount.value, pagesCount.value + 12);
  }
}
</script>
