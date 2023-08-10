<template>
  <div v-if="productInfo">
    <Product/>
  </div>
</template>

<script setup>
import { productStore } from "@/stores/product.js";
import { ref, computed } from "vue";
import Product from "./Product.vue";

const store = productStore();
store.getProduct();

const productInfo = computed(() => store.products);
</script>