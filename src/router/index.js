import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/",
      name: "HomePage",
      component: () => import("../components/Navbar.vue"),
    },
    {
      path: "/product/:id",
      name: "Dinamic",
      component: () => import("../views/Dinamic.vue"),
    },
  ],
});

export default router;
