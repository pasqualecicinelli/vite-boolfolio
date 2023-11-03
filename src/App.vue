<script>
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
    };
  },

  created() {
    axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
      console.log(response.data.data);
      this.projects = response.data.data;
    });
  },
};
</script>

<template>
  <h1>hello</h1>
</template>

<style lang="scss"></style>
