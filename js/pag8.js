// Pagina 8 - Rede
// Aceitar, recusar e conectar. Os numeros do resumo sao atualizados na hora.

// Soma (ou subtrai) um valor em um dos numeros do "Resumo da sua rede"
function mudarNumero(id, valor) {
  var elemento = document.getElementById(id);
  var atual = parseInt(elemento.textContent);
  elemento.textContent = atual + valor;
}

// Mostra a mensagem "Nenhum convite pendente." quando acabarem os convites
function verificarConvites() {
  var restantes = document.getElementsByClassName("convite").length;

  if (restantes == 0) {
    document.getElementById("aviso-convites").textContent = "Nenhum convite pendente.";
  }
}

// Devolve "Outubro de 2026" (mes e ano de hoje) para a coluna "Conectados desde"
function mesAtual() {
  var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
               "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  var hoje = new Date();
  return meses[hoje.getMonth()] + " de " + hoje.getFullYear();
}

// ACEITAR: remove o convite, Conexoes +1 e Convites recebidos -1
function aceitarConvite(botao) {
  var convite = botao.closest(".convite");
  var nome = convite.getElementsByTagName("h3")[0].textContent;
  var paragrafos = convite.getElementsByTagName("p");
  var partes = paragrafos[0].textContent.split(" — "); // "Cargo — Tecnologias"

  // Coloca a pessoa na tabela "Minhas conexões", para a tabela bater com o numero
  var tabela = document.getElementById("tabela-conexoes");
  var linha = tabela.insertRow(-1);
  linha.insertCell(0).textContent = nome;
  linha.insertCell(1).textContent = partes[0];
  linha.insertCell(2).textContent = partes[1];
  linha.insertCell(3).textContent = mesAtual();

  convite.remove();
  mudarNumero("num-conexoes", 1);
  mudarNumero("num-convites", -1);
  verificarConvites();
}

// RECUSAR: so remove o convite e atualiza o contador de convites
function recusarConvite(botao) {
  var convite = botao.closest(".convite");

  convite.remove();
  mudarNumero("num-convites", -1);
  verificarConvites();
}

// CONECTAR: o botao vira "Pendente" e nao pode ser clicado de novo
function conectar(botao) {
  botao.textContent = "Pendente";
  botao.disabled = true;
}
