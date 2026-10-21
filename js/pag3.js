function buscarDev() {
  var texto = document.getElementById("busca").value.toLowerCase();
  var cartoes = document.getElementsByClassName("dev");
  var achou = false;

  for (var i = 0; i < cartoes.length; i++) {
    var nome = cartoes[i].getElementsByTagName("h3")[0].textContent.toLowerCase();

    if (nome.includes(texto)) {
      cartoes[i].style.display = "";
      achou = true;
    } else {
      cartoes[i].style.display = "none";
    }
  }

  if (achou == true) {
    document.getElementById("aviso-busca").textContent = "";
  } else {
    document.getElementById("aviso-busca").textContent = "Nenhum desenvolvedor encontrado.";
  }
}

function conectar(botao) {
  botao.textContent = "Pedido enviado";
  botao.disabled = true;
}