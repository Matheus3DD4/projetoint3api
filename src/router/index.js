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
      path: "/livro/:id",
      name: "livro",
      component: () => import("../views/LivroView.vue"),
      props: true,
    },
  ],
});

export default router;
