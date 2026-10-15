// Página 6 - Comunidades
// Funções simples usando apenas o básico de JavaScript

// Lista com os nomes (ids) de todas as comunidades.
// Usamos essa lista para percorrer as comunidades com o "for".
var comunidades = ["html", "js", "python", "banco", "mobile", "emprego"];


// ---------- 1) PARTICIPAR / SAIR ----------
// Quando clica no botão, ele troca entre "Participar" e "Sair"
// e o número de membros aumenta ou diminui.
function participar(nome) {
  var botao = document.getElementById("botao-participar-" + nome);
  var membros = document.getElementById("membros-" + nome);
  var titulo = document.getElementById("cartao-" + nome).getElementsByTagName("h3")[0].textContent;

  // O número aparece como "12.540". Tiramos o ponto para poder fazer a conta.
  var total = Number(membros.textContent.replace(".", ""));

  if (botao.textContent == "Participar") {
    total = total + 1;
    botao.textContent = "Sair";
    botao.setAttribute("aria-label", "Sair da comunidade " + titulo); // para leitores de tela
    botao.classList.add("participando");
  } else {
    total = total - 1;
    botao.textContent = "Participar";
    botao.setAttribute("aria-label", "Participar da comunidade " + titulo);
    botao.classList.remove("participando");
  }

  // toLocaleString coloca o ponto de volta (12540 vira 12.540)
  membros.textContent = total.toLocaleString("pt-BR");
}


// ---------- 2) BUSCA DE COMUNIDADES ----------
// Esconde os cartões que não têm o texto digitado no título.
function buscarComunidade() {
  var texto = document.getElementById("campo-busca").value.toLowerCase();
  var encontradas = 0;

  for (var i = 0; i < comunidades.length; i++) {
    var cartao = document.getElementById("cartao-" + comunidades[i]);
    var titulo = cartao.getElementsByTagName("h3")[0].textContent.toLowerCase();

    if (titulo.includes(texto)) {
      cartao.style.display = ""; // volta ao que está no CSS (mostra)
      encontradas = encontradas + 1;
    } else {
      cartao.style.display = "none"; // esconde
    }
  }

  // Aviso quando nenhuma comunidade for encontrada
  var aviso = document.getElementById("aviso-busca");
  if (encontradas == 0) {
    aviso.textContent = "Nenhuma comunidade encontrada.";
  } else {
    aviso.textContent = "";
  }
}


// ---------- 3) ABRIR E FECHAR UMA COMUNIDADE ----------
// Mostra a área com o conteúdo da comunidade escolhida.
function abrirComunidade(nome) {
  esconderDetalhes(); // primeiro fecha qualquer outra que esteja aberta

  var detalhe = document.getElementById("detalhe-" + nome);
  detalhe.style.display = "block";

  // focus() leva o cursor até o título, a página rola até lá
  // e quem usa leitor de tela é avisado da mudança.
  document.getElementById("titulo-detalhe-" + nome).focus();
}

function fecharComunidade(nome) {
  esconderDetalhes();
  // devolve o foco para o botão "Ver comunidade" que abriu
  document.getElementById("botao-ver-" + nome).focus();
}

function esconderDetalhes() {
  for (var i = 0; i < comunidades.length; i++) {
    document.getElementById("detalhe-" + comunidades[i]).style.display = "none";
  }
}


// ---------- 4) MURAL DE RECADOS (estilo Orkut) ----------
// Pega o texto digitado e coloca como um novo item na lista.
function enviarRecado(nome) {
  var campo = document.getElementById("campo-recado-" + nome);
  var mural = document.getElementById("mural-" + nome);
  var texto = campo.value.trim(); // trim() tira espaços do começo e do fim

  // Se o campo estiver vazio, avisa e para a função
  if (texto == "") {
    alert("Escreva um recado antes de enviar.");
    campo.focus();
    return;
  }

  var novoRecado = document.createElement("li"); // cria um <li>
  novoRecado.textContent = "Você: " + texto;     // coloca o texto nele
  mural.appendChild(novoRecado);                  // adiciona no final da lista

  campo.value = ""; // limpa o campo
  campo.focus();
}
