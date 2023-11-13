<script>
import ProjectCard from "./ProjectCard.vue";
import PaginationUi from "../ui/PaginationUi.vue";
import axios from "axios";

import { store } from "../../data/store";

export default {
  data() {
    return {
      projects: [],
      pagination: [],
    };
  },

  components: { ProjectCard, PaginationUi },

  methods: {
    fetchProjects(uri = store.api.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        this.projects = response.data.data;
        this.pagination = response.data.links;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container">
    <div class="row row-cols-2 g-3">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        :isDetail="false"
      />
    </div>
    <PaginationUi :pagination="pagination" @change-page="fetchProjects" />
  </div>
</template>

<script lang="scsss" scoped></script>
