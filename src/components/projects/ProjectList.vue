<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";

import { store } from "../../data/store";

export default {
  data() {
    return {
      projects: [],
    };
  },

  components: { ProjectCard },

  methods: {
    fetchProject() {
      axios.get(store.api.baseUrl + "projects").then((response) => {
        this.projects = response.data.data;
      });
    },
  },

  created() {
    this.fetchProject();
  },
};
</script>

<template>
  <div class="container">
    <h1 class="text-center my-5">Lista</h1>
    <div class="row row-cols-2 g-2">
      <ProjectCard v-for="project in projects" :project="project" />
    </div>
  </div>
</template>

<script lang="scsss" scoped></script>
