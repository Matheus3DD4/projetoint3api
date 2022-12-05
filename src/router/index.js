import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/biblioteca",
      name: "biblioteca",
      component: () => import("../views/BibliotecaView.vue"),
    },
    {
      path: "/livro",
      name: "livro",
      component: () => import("../views/LivroView.vue"),
    },
  ],
});

export default router;
