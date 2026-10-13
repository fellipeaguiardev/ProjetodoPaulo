(function () {
  "use strict";

  const CHAVE = "devnetwork-acessibilidade";
  const formulario = document.querySelector(".conteudo-painel");

  if (!formulario) {
    return;
  }

  const opcoes = formulario.querySelectorAll('input[type="checkbox"]');

  formulario.setAttribute("autocomplete", "off");

  function lerPreferencias() {
    try {
      return JSON.parse(localStorage.getItem(CHAVE)) || {};
    } catch (erro) {
      return {};
    }
  }

  function salvar() {
    const preferencias = {};
    opcoes.forEach(function (opcao) {
      preferencias[opcao.id] = opcao.checked;
    });
    try {
      localStorage.setItem(CHAVE, JSON.stringify(preferencias));
    } catch (erro) {
      return;
    }
  }

  function aplicar() {
    const preferencias = lerPreferencias();
    opcoes.forEach(function (opcao) {
      opcao.checked = preferencias[opcao.id] === true;
    });
  }

  aplicar();

  formulario.addEventListener("change", salvar);

  formulario.addEventListener("reset", function () {
    setTimeout(salvar, 0);
  });

  window.addEventListener("storage", function (evento) {
    if (evento.key === CHAVE) {
      aplicar();
    }
  });

  window.addEventListener("pageshow", aplicar);

  const aviso = formulario.querySelector(".aviso-painel");
  if (aviso) {
    aviso.textContent = "Suas escolhas ficam salvas neste navegador e valem para todas as páginas.";
  }
})();