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
    <div class="card">
      <span class="m-1"><strong>Id:</strong> {{ project.id }}</span>
      <span class="m-1"><strong>Nome:</strong> {{ project.name_prog }}</span>
      <span class="m-1"><strong>Link:</strong> {{ project.link }}</span>
    </div>
  </div>
</template>

<style lang="scsss" scoped></style>
