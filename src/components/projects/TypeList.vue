<script>
import axios from "axios";
import { store } from "../../data/store";

import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {
      projects: [],
      pagination: {
        links: null,
      },
    };
  },
  props: {
    type_id: Number,
  },

  components: { ProjectCard },

  methods: {
    fetchProjects(
      uriType = store.api.baseUrl + "projects-by-type/" + this.type_id
    ) {
      axios.get(uriType).then((response) => {
        this.projects = response.data.data;
        this.pagination.links = response.data.links;
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
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          v-for="link in pagination.links"
          @click="fetchProjects(link.url)"
          class="page-item"
        >
          <a class="page-link" href="#" v-html="link.label"></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss"></style>
