// Pagina 8 - Rede
// Busca, conectar, cancelar pedido, aceitar, recusar e desfazer.
// Tudo acontece so na tela (front-end): nada e guardado em banco de dados.

// ---------------------------------------------------------------
// Funcoes de apoio
// ---------------------------------------------------------------

// Soma (ou subtrai) um valor em um dos numeros do "Resumo da sua rede"
function mudarNumero(id, valor) {
  var elemento = document.getElementById(id);
  var atual = parseInt(elemento.textContent);
  elemento.textContent = atual + valor;
}

// Devolve "Outubro de 2026" (mes e ano de hoje) para a coluna "Conectados desde"
function mesAtual() {
  var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
               "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  var hoje = new Date();
  return meses[hoje.getMonth()] + " de " + hoje.getFullYear();
}

// Escreve a mensagem da area de convites e mostra (ou esconde) o botao Desfazer
function mostrarAviso(texto, comDesfazer) {
  document.getElementById("texto-aviso").textContent = texto;
  document.getElementById("botao-desfazer").hidden = !comDesfazer;
}

// Texto extra quando nao sobra nenhum convite
function textoSemConvites() {
  if (document.getElementsByClassName("convite").length == 0) {
    return " Não há mais convites pendentes.";
  }
  return "";
}

// ---------------------------------------------------------------
// Buscar pessoas
// ---------------------------------------------------------------

// Filtra cartoes de sugestao, convites e as duas tabelas pelo nome e pela tecnologia
function buscarPessoas() {
  var nomeDigitado = document.getElementById("busca-pessoa").value.toLowerCase().trim();
  var selecao = document.getElementById("tecnologia");
  var tecnologia = "";
  if (selecao.value != "") {
    tecnologia = selecao.options[selecao.selectedIndex].text; // ex.: "Java"
  }

  var itens = [];
  var i;

  // Cartoes de sugestao e convites: nome no h3, tecnologias na 1a linha (Cargo — Tecnologias)
  var cartoes = document.querySelectorAll(".cartao-pessoa, .convite");
  for (i = 0; i < cartoes.length; i++) {
    itens.push({
      elemento: cartoes[i],
      nome: cartoes[i].getElementsByTagName("h3")[0].textContent,
      tecnologias: cartoes[i].getElementsByTagName("p")[0].textContent
    });
  }

  // Linhas das tabelas: nome na 1a coluna, tecnologias na 3a
  var linhas = document.querySelectorAll("#tabela-conexoes tr, #tabela-sugestoes tr");
  for (i = 0; i < linhas.length; i++) {
    var colunas = linhas[i].getElementsByTagName("td");
    itens.push({
      elemento: linhas[i],
      nome: colunas[0].textContent,
      tecnologias: colunas[2].textContent
    });
  }

  var visiveis = 0;
  for (i = 0; i < itens.length; i++) {
    var bateNome = itens[i].nome.toLowerCase().includes(nomeDigitado);
    var bateTecnologia = true;

    if (tecnologia != "") {
      // \b garante palavra inteira: "Java" nao encontra "JavaScript"
      var palavra = new RegExp("\\b" + tecnologia + "\\b", "i");
      bateTecnologia = palavra.test(itens[i].tecnologias);
    }

    if (bateNome && bateTecnologia) {
      itens[i].elemento.style.display = "";
      visiveis = visiveis + 1;
    } else {
      itens[i].elemento.style.display = "none";
    }
  }

  var aviso = document.getElementById("aviso-busca");
  if (visiveis == 0) {
    aviso.textContent = "Nenhuma pessoa encontrada.";
  } else {
    aviso.textContent = "";
  }
}

// Apaga os campos e mostra tudo de novo
function limparBusca() {
  document.getElementById("busca-pessoa").value = "";
  document.getElementById("tecnologia").value = "";
  buscarPessoas();
}

// ---------------------------------------------------------------
// Conectar / Pendente / Cancelar pedido
// ---------------------------------------------------------------

// Troca a coluna "Situacao" da tabela de comparacao para essa pessoa
function marcarSituacao(nome, situacao) {
  var linhas = document.getElementById("tabela-sugestoes").getElementsByTagName("tr");

  for (var i = 0; i < linhas.length; i++) {
    var colunas = linhas[i].getElementsByTagName("td");
    if (colunas[0].textContent == nome) {
      colunas[3].textContent = situacao;
    }
  }
}

// CONECTAR: o botao vira "Pendente", aparece "Cancelar pedido" e Sugestoes -1
function conectar(botao) {
  var cartao = botao.closest(".cartao-pessoa");
  var nome = cartao.getElementsByTagName("h3")[0].textContent;

  botao.textContent = "Pendente";
  botao.disabled = true;
  cartao.querySelector(".botao-cancelar").hidden = false;

  mudarNumero("num-sugestoes", -1);
  marcarSituacao(nome, "Pendente");
}

// CANCELAR PEDIDO: volta para "Conectar" e Sugestoes +1
function cancelarPedido(botaoCancelar) {
  var cartao = botaoCancelar.closest(".cartao-pessoa");
  var nome = cartao.getElementsByTagName("h3")[0].textContent;
  var botaoConectar = cartao.getElementsByTagName("button")[0];

  botaoConectar.textContent = "Conectar";
  botaoConectar.disabled = false;
  botaoCancelar.hidden = true;

  mudarNumero("num-sugestoes", 1);
  marcarSituacao(nome, "Sugerido");
}

// ---------------------------------------------------------------
// Convites: aceitar, recusar e desfazer
// ---------------------------------------------------------------

// Guarda a ultima acao para o botao "Desfazer"
var ultimaAcao = null;

// ACEITAR: remove o convite, Conexoes +1 e Convites recebidos -1
function aceitarConvite(botao) {
  var convite = botao.closest(".convite");
  var nome = convite.getElementsByTagName("h3")[0].textContent;
  var partes = convite.getElementsByTagName("p")[0].textContent.split(" — "); // "Cargo — Tecnologias"

  // Coloca a pessoa na tabela "Minhas conexões", para a tabela bater com o numero
  var linha = document.getElementById("tabela-conexoes").insertRow(-1);
  linha.insertCell(0).textContent = nome;
  linha.insertCell(1).textContent = partes[0];
  linha.insertCell(2).textContent = partes[1];
  linha.insertCell(3).textContent = mesAtual();

  ultimaAcao = { tipo: "aceito", convite: convite, proximo: convite.nextElementSibling, linha: linha };

  convite.remove();
  mudarNumero("num-conexoes", 1);
  mudarNumero("num-convites", -1);
  mostrarAviso("Convite de " + nome + " aceito." + textoSemConvites(), true);
  buscarPessoas();
}

// RECUSAR: so remove o convite e atualiza o contador de convites
function recusarConvite(botao) {
  var convite = botao.closest(".convite");
  var nome = convite.getElementsByTagName("h3")[0].textContent;

  ultimaAcao = { tipo: "recusado", convite: convite, proximo: convite.nextElementSibling, linha: null };

  convite.remove();
  mudarNumero("num-convites", -1);
  mostrarAviso("Convite de " + nome + " recusado." + textoSemConvites(), true);
  buscarPessoas();
}

// DESFAZER: devolve o convite para o mesmo lugar e volta os numeros
function desfazer() {
  if (ultimaAcao == null) {
    return;
  }

  var secao = document.getElementById("aviso-convites").parentNode;
  secao.insertBefore(ultimaAcao.convite, ultimaAcao.proximo);
  mudarNumero("num-convites", 1);

  if (ultimaAcao.tipo == "aceito") {
    ultimaAcao.linha.remove();
    mudarNumero("num-conexoes", -1);
  }

  ultimaAcao = null;
  mostrarAviso("Ação desfeita.", false);
  buscarPessoas();
}
