var formContato = document.getElementById("form-contato");

formContato.addEventListener("submit", function (evento) {
  evento.preventDefault();
  var nome = document.getElementById("nome").value;
  document.getElementById("aviso-contato").textContent = "Obrigado, " + nome + "! Sua mensagem foi enviada.";
  formContato.reset();
});