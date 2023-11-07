<script>
import ProjectList from "./components/projects/ProjectList.vue";

export default {
  data() {
    return {};
  },
  components: { ProjectList },
};
</script>

<template>
  <h1 class="text-center my-2">Progetti</h1>

  <router-view></router-view>

  <ProjectList />
</template>

<style lang="scss"></style>
