<script>
export default {
  data() {
    return {};
  },
  props: {
    project: Object,
    isDetail: Boolean,
  },
};
</script>

<template>
  <div class="col my-2">
    <div class="card h-100">
      <div class="list m-2">
        <strong>Id: </strong>
        <span>{{ project.id }}</span>
      </div>
      <div class="list m-2">
        <strong>Nome:</strong> <span>{{ project.name_prog }}</span>
      </div>
      <div class="list m-2">
        <strong>Link:</strong> <span>{{ project.link }}</span>
      </div>
      <div class="list d-flex gap-1 m-2">
        <strong>Tecnologia:</strong>
        <div v-for="technology in project.technologies">
          <span
            class="badge ronded-pill"
            :style="{ backgroundColor: technology.color }"
          >
            {{ technology.label }}</span
          >
        </div>
      </div>
      <div class="list m-2">
        <strong>Parte Sviluppata: </strong>
        <router-link
          :to="{
            name: 'projects-by-type',
            params: {
              type_id: project.type_id,
            },
          }"
          v-if="project.type_id"
          >{{ project.type.developed_part }}</router-link
        >
        <span v-else="!project.type_id">Nessuna</span>
      </div>

      <div class="list m-2" v-if="isDetail">
        <strong>Descrizione: </strong>
        <span> {{ project.description }}</span>
      </div>

      <div class="card-footer" v-if="!isDetail">
        <router-link
          :to="{
            name: 'project-detail',
            params: {
              id: project.id,
            },
          }"
          class="btn btn-primary m-2 w-25"
          >Dettagli</router-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scsss" scoped></style>
