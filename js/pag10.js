var botaoLidas = document.getElementById("marcar-lidas");

botaoLidas.addEventListener("click", function () {
  var notificacoes = document.querySelectorAll(".notificacao");

  for (var i = 0; i < notificacoes.length; i++) {
    notificacoes[i].classList.add("lida");
  }

  botaoLidas.textContent = "Tudo lido";
  botaoLidas.disabled = true;
});