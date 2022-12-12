<script>
export default {};
</script>
<template>
  <main class="mainlivro">
    <div class="divlivro">
      <div class="infoslivro">
        <div class="poster"></div>
        <div class="nome-info">
          <h2>Nome do livro</h2>
          <div class="informacoes">
            <h3>00/00/0000</h3>
            <h3 class="infohover">categorias</h3>
            <h3 class="infohover">autor</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aut illum, atque omnis aperiam eius quae dolores fuga, perspiciatis mollitia voluptates incidunt tenetur perferendis ipsam eos, quas quo cumque error.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus neque architecto cumque delectus magnam autem obcaecati, molestiae quos iste placeat odio corrupti vel, sequi consequatur fuga nostrum sit aspernatur est!
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
.infoslivro {
  display: flex;
}
.infohover:hover {
  text-decoration: underline;
  cursor: pointer;
}
.nome-info{
  margin-left: 20px;
  width: 70%;
}
.informacoes h3 {
  padding: 0 5px;
  font-size: 20px;
  color: #29383d;

}
.mainlivro {
  display: flex;
  justify-content: center;
}
.informacoes {
  display: flex;
}
.divlivro{
  background-color: rgba(251, 248, 49, 0.166);
    border-radius: 20px;
    height: 62vh;
    width: 66%;
    padding: 50px;
    margin: 33px;
}
.poster {
  height: 62vh;
    width: 28%;
    border: 3px solid #f2de26;
    border-radius: 20px;
    background-color: #29383d;
}
</style>