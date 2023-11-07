import { createRouter, createWebHistory } from "vue-router";

//Importo i componenti

import ProjectList from "./components/projects/ProjectList.vue";

const router = createRouter({
  //aggiungo history e rotte

  history: createWebHistory(),

  routes: [],
});

export { router };
