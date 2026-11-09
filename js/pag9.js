var formMensagem = document.getElementById("form-mensagem");

formMensagem.addEventListener("submit", function (evento) {
  evento.preventDefault();

  var campo = document.getElementById("mensagem");
  var texto = campo.value.trim();
  if (texto == "") {
    return;
  }

  var escolhido = document.querySelector(".seletor-chat:checked");
  var conversa = document.getElementById(escolhido.id + "-chat");

  var novaMensagem = document.createElement("p");
  novaMensagem.className = "mensagem mensagem-enviada";
  novaMensagem.textContent = texto;
  conversa.appendChild(novaMensagem);

  campo.value = "";
  campo.focus();
});