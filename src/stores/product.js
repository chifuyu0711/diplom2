import axios from "axios";
import { defineStore } from "pinia";

export const productStore = defineStore("products", {
  state: () => ({
    products: null,
    sortProducts: null,
  }),
  actions: {
    async getProduct() {
      try {
        const response = await axios.get("https://dummyjson.com/products?limit=100");
        this.products = response.data.products;
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {},
});
