<script>
import axios from "axios";
import { store } from "../../data/store";

import ProjectCard from "./ProjectCard.vue";
import PaginationUi from "../ui/PaginationUi.vue";

export default {
  data() {
    return {
      projects: [],
      pagination: [],
    };
  },
  props: {
    type_id: Number,
  },

  components: { ProjectCard, PaginationUi },

  methods: {
    fetchProjects(
      uriType = store.api.baseUrl + "projects-by-type/" + this.type_id
    ) {
      axios.get(uriType).then((response) => {
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
  <div class="row row-cols-2 my-2 g-3">
    <ProjectCard
      v-for="project in projects"
      :project="project"
      :isDetail="false"
    />
  </div>
  <PaginationUi :pagination="pagination" @change-page="fetchProjects" />
</template>

<style lang="scss"></style>
