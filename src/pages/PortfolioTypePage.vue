<script>
import { store } from "../data/store";
import axios from "axios";
import TypeList from "../components/projects/TypeList.vue";

export default {
  data() {
    return {
      type: null,
    };
  },
  components: { TypeList },

  created() {
    axios
      .get(store.api.baseUrl + "types/" + this.$route.params.type_id)
      .then((response) => {
        this.type = response.data;
      });
  },
};
</script>

<!--TODO AGGIUSTARE {{ type.developed_part }} -->

<template>
  <div class="container">
    <h1 class="text-center my-5">
      Tipo di progetto:
      <!-- <span>{{ type.developed_part }}</span>-->
    </h1>

    <TypeList :type_id="type.id" v-if="type" />
  </div>
</template>

<style lang="scss"></style>
