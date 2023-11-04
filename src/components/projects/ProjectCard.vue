<script>
export default {
  data() {
    return {};
  },
  props: {
    project: Object,
  },
};
</script>

<template>
  <div class="col">
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
        <strong>Parte Sviluppata: </strong
        ><span v-if="project.type_id">{{ project.type.developed_part }}</span>
        <span v-else="!project.type_id">Nessuna</span>
      </div>
    </div>
  </div>
</template>

<style lang="scsss" scoped></style>
