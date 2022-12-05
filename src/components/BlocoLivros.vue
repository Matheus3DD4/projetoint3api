<script>
import { RouterLink } from "vue-router";

export default {
  // props: ["titulo"],
  props: {
    nome: {
      default: "A DEFINIR",
      type: String,
    },
    ano: String,
    imagem: String,
  },
  components: { RouterLink },
};
</script>
<template>
  <article class="blocklivros">
    <RouterLink to="/livro">
      <div class="imgedit">
        <img :src="imagem" width="180" height="240" />
      </div>
      <div class="h2">
        <h2>{{ nome }}</h2>
      </div>
      <div class="h3">
        <h3>{{ ano }}</h3>
      </div>
    </RouterLink>
  </article>
</template>

<style scoped>
.blocklivros {
  width: 18%;
}
</style>
