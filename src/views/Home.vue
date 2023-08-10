<template>
  <Search />
  <div class="main container" v-if="true">
    <Products/>
  </div>
</template>

<script setup>
import { productStore } from "@/stores/product.js";
import Products from "@/components/Products.vue";
import Search from "../components/Search.vue";


const store = productStore();
store.getProduct();
</script>

