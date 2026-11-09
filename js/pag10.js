const listaNotificacoes = document.querySelector('.lista-notificacoes');
const contadorNaoLidas = document.getElementById('contador-nao-lidas');
const botaoMarcarLidas = document.getElementById('marcar-todas-lidas');
const avisoSemNotificacoes = document.getElementById('sem-notificacoes');
const tituloNotificacoes = document.getElementById('titulo-notificacoes');
const tituloOriginal = document.title;

// Atualiza o contador, o título da aba, o resumo lateral e o aviso de lista vazia
function atualizarContadores() {
  const naoLidas = listaNotificacoes.querySelectorAll('.notificacao.nao-lida').length;

  contadorNaoLidas.textContent = naoLidas + (naoLidas === 1 ? ' não lida' : ' não lidas');
  contadorNaoLidas.classList.toggle('zerado', naoLidas === 0);
  botaoMarcarLidas.disabled = naoLidas === 0;
  document.title = naoLidas > 0 ? '(' + naoLidas + ') ' + tituloOriginal : tituloOriginal;

  document.querySelectorAll('[data-resumo]').forEach(function (item) {
    const categoria = item.dataset.resumo;
    const total = listaNotificacoes.querySelectorAll('.notificacao[data-categoria="' + categoria + '"]').length;
    item.querySelector('.total-resumo').textContent = total;
  });

  avisoSemNotificacoes.hidden = listaNotificacoes.children.length > 0;
}

// Botão "Marcar todas como lidas"
botaoMarcarLidas.addEventListener('click', function () {
  listaNotificacoes.querySelectorAll('.notificacao.nao-lida').forEach(function (notificacao) {
    notificacao.classList.remove('nao-lida');
  });
  listaNotificacoes.querySelectorAll('.marcador-nao-lida').forEach(function (marcador) {
    marcador.remove();
  });
  atualizarContadores();
});

// Botão ✕ de cada notificação
listaNotificacoes.addEventListener('click', function (evento) {
  const botao = evento.target.closest('.botao-apagar');
  if (!botao) return;

  const item = botao.closest('li');

  item.classList.add('saindo');
  setTimeout(function () {
    const posicao = Array.from(listaNotificacoes.children).indexOf(item);
    item.remove();
    atualizarContadores();

    // Mantém o foco do teclado na página depois de apagar
    const vizinho = listaNotificacoes.children[posicao] || listaNotificacoes.children[posicao - 1];
    if (vizinho) {
      vizinho.querySelector('.botao-apagar').focus();
    } else {
      tituloNotificacoes.focus();
    }
  }, 200);
});

atualizarContadores();
