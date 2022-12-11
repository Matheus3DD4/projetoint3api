<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
};
</script>

<template>
  <header>
    <div>
      <h1>J<strong>B</strong>C</h1>
    </div>
    <div id="header">
      <span>
        <Icon icon="entypo:home" :inline="true" />
        <RouterLink class="links" to="/">Início</RouterLink>
      </span>
      <span>
        <Icon icon="charm:search" :inline="true" />
        <RouterLink class="links" to="/livros">Buscar</RouterLink>
      </span>
      <span>
        <Icon icon="clarity:library-line" :inline="true" />
        <RouterLink class="links" to="/biblioteca">Sua Biblioteca</RouterLink>
      </span>
      <span>
        <Icon icon="tabler:playlist-add" :inline="true" />
        <RouterLink class="links" to="/categorias">Livros Curtidos</RouterLink>
      </span>
    </div>
  </header>
</template>

<style>
#header span {
  margin: 0 25px;
    /* padding-bottom: 3vh; */
    padding: 3vh 1vh;
}
svg{
  margin-right: 10px;
}
header span:hover {
  border-bottom: 3px solid #ffe917;
}
header a {
  color: white;
  text-decoration: none;
}
header a:hover{
  background-color: transparent;
}
header {
    padding: 22px;
    box-shadow: 0px 20px 35px rgba(0, 0, 0, 0.1);
    height: 5vh;
    background-color: #1f3544;
    font-size: 1.6rem;
    color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: space-between;
}
strong {
  color: white;
}
</style>
