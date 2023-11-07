import { createRouter, createWebHistory } from "vue-router";

//Importo i componenti

import ProjectList from "./components/projects/ProjectList.vue";
import HomePage from "./pages/HomePage.vue";
import PortfolioPage from "./pages/PortfolioPage.vue";
import ProjectDetailPage from "./pages/ProjectDetailPage.vue";

const router = createRouter({
  //aggiungo history e rotte

  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },

    {
      path: "/portfolio",
      name: "portfolio",
      component: PortfolioPage,
    },

    {
      path: "/portfolio/:id",
      name: "project-detail",
      component: ProjectDetailPage,
    },
  ],
});

export { router };
