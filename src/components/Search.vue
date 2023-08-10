<template>
  <div class="search container">
    <h2 class="search__title">Сортировка</h2>
    <select v-model="sort" @click="sorterBy(sort)" class="search__select">
      <option>По имени</option>
      <option>По цене</option>
      <option>По кол-ве</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { productStore } from "@/stores/product.js";

let sort = ref('');
const store = productStore();
store.getProduct();

let i = 0;
function sorterBy(sort) {
  console.log(sort);
  i++;
  if (i == 2) {
    i = 0;
    if (sort == "По имени") {
      return store.sortProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort == "По цене") {
      return store.sortProducts.sort((a, b) => b.price - a.price);
    } else {
      return store.sortProducts.sort((a, b) => b.stock - a.stock);
    }
  }
}
</script>
