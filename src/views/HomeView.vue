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
  <section class="mensagem">
    <h2>matheus marques gobetti</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro enim, ut facilis ullam inventore repellat maiores assumenda iusto tempore dicta labore alias quia, odit quasi rerum. Dolore ullam reiciendis explicabo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum tenetur adipisci nulla. Impedit provident quia nemo exercitationem suscipit cupiditate mollitia necessitatibus quod veritatis quasi, earum perferendis repellat laudantium deserunt quo. </p>
  </section>
  <section id="editoras" v-for="list of lists" :key="list.id">
    <h4>
      {{ list.list_name }}
    </h4>
    <div class="livros">
      <BlocoLivros
        v-for="book of list.books"
        :key="book.book_uri"
        :imagem="book.book_image"
        />
        <!--
          :nome="book.title"
          :ano="book.publisher"
        -->
    </div>
  </section>
</template>
<style>
#editoras {
  display: flex;
  flex-direction: column;
  border-top: 10px solid #ffe917;
  width: 100%;
  background-color: white;
}
.livros {
    /* align-items: center; */
    display: flex;
    flex-wrap: wrap;
    /* width: 100%; */
    justify-content: center;
}
</style>
