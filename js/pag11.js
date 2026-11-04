var botoesSeguir = document.querySelectorAll(".botao-seguir");

for (var i = 0; i < botoesSeguir.length; i++) {
  botoesSeguir[i].addEventListener("click", function () {
    var texto = this.querySelector(".texto-botao");
    var contador = this.querySelector(".contador-seguidores");
    var numero = parseInt(contador.textContent);

    if (texto.textContent == "Seguir empresa") {
      texto.textContent = "Seguindo";
      contador.textContent = numero + 1;
    } else {
      texto.textContent = "Seguir empresa";
      contador.textContent = numero - 1;
    }
  });
}