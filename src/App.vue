<script>
import Navbar from "./components/Navbar.vue";

export default {
  data() {
    return {};
  },
  components: { Navbar },
};
</script>

<template>
  <header>
    <Navbar></Navbar>
  </header>

  <router-view></router-view>
</template>

<style lang="scss"></style>
