<script>
import axios from "axios";
import BlocoLivros from "../components/BlocoLivros.vue";
export default {
  components: { BlocoLivros },
  data() {
    return {
      lists: [],
    };
  },
  async created() {
    const url =
      "v3/lists/full-overview.json?api-key=LvZGUF2GtcQfiEgW7Eh5bHbqZLADzNYo";
    const { data } = await axios.get(url);
    console.log(data);
    this.lists = data.results.lists;
  },
};
</script>
<template>
  <section id="editoras" v-for="list of lists" :key="list.id">
    <h1>
      {{ list.list_name }}
    </h1>
    <div class="livros">
      <BlocoLivros
        v-for="book of list.books"
        :key="book.book_uri"
        :nome="book.title"
        :ano="book.publisher"
        :imagem="book.book_image"
      />
    </div>
  </section>
</template>
<style>
#editoras {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.livros {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
