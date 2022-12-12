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
    book: Object,
  },
  components: { RouterLink },
};
</script>
<template>
  <article class="blocklivros">
    <RouterLink :to="`/livro/${book.book_uri.split('/')[3]}`">
      <div class="imgedit">
        <img :src="book.book_image" />
      </div>
      <!--
        <div class="h2">
          <h2>{{ nome }}</h2>
        </div>
        <div class="h3">
          <h3>{{ ano }}</h3>
        </div>x
      -->
    </RouterLink>
  </article>
</template>

<style scoped>
.blocklivros {
  width: 13%;
}
.imgedit img {
  border-radius: 15px;
  width: 180px;
  height: 256px;
}
.imgedit img:hover {
  widows: 200px;
  height: 250px;
  transition: 0.3s all ease;
}
</style>
