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
      <img class="logo" src="@/components/img/logo.png" />
    </div>
    <div id="header">
      <Icon icon="entypo:home" :inline="true" />
      <span>
        <RouterLink class="links" to="/">Início</RouterLink>
      </span>
      <Icon icon="charm:search" :inline="true" />
      <span>
        <RouterLink class="links" to="/livros">Buscar</RouterLink>
      </span>
      <Icon icon="clarity:library-line" :inline="true" />
      <span>
        <RouterLink class="links" to="/biblioteca">Sua Biblioteca</RouterLink>
      </span>
      <Icon icon="tabler:playlist-add" :inline="true" />
      <span>
        <RouterLink class="links" to="/categorias">Livros Curtidos</RouterLink>
      </span>
    </div>
  </header>
</template>

<style>
header span {
  padding: 0 55px 0px 5px;
}

header {
  margin: 50px;
  height: 15%;
  font-size: 1.6rem;
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
