(function () {
  "use strict";

  const formulario = document.getElementById("form-publicar");
  const caixaTexto = document.getElementById("publicacao");
  const lista = document.getElementById("lista-publicacoes");
  const molde = document.getElementById("modelo-publicacao");

  if (!formulario || !caixaTexto || !lista || !molde) {
    return;
  }

  const CHAVE_POSTS = "devnetwork-meus-posts";
  const CHAVE_ESTADOS = "devnetwork-feed-estados";

  function ler(chave, padrao) {
    try {
      return JSON.parse(localStorage.getItem(chave)) || padrao;
    } catch (erro) {
      return padrao;
    }
  }

  function gravar(chave, valor) {
    try {
      localStorage.setItem(chave, JSON.stringify(valor));
    } catch (erro) {
      return;
    }
  }

  let estados = ler(CHAVE_ESTADOS, {});

  function contadorDe(input) {
    const acao = input.closest(".acao");
    return acao ? acao.querySelector(".contador") : null;
  }

  function atualizarContador(input) {
    const contador = contadorDe(input);
    if (!contador) {
      return;
    }
    if (contador.dataset.base === undefined) {
      contador.dataset.base = parseInt(contador.textContent.replace(/\D/g, ""), 10) || 0;
    }
    const total = Number(contador.dataset.base) + (input.checked ? 1 : 0);
    contador.textContent = total.toLocaleString("pt-BR");
  }

  function marcarRestaurado(input) {
    if (input.checked && input.nextElementSibling) {
      input.nextElementSibling.classList.add("restaurado");
    }
  }

  function liberarAnimacao(input) {
    const grupo = input.type === "radio"
      ? lista.querySelectorAll('input[name="' + input.name + '"]')
      : [input];
    grupo.forEach(function (item) {
      if (item.nextElementSibling) {
        item.nextElementSibling.classList.remove("restaurado");
      }
    });
  }

  function prepararInteracoes(area) {
    area.querySelectorAll(".input-curtir, .input-salvar").forEach(function (input) {
      if (estados[input.id] !== undefined) {
        input.checked = estados[input.id];
      }
      marcarRestaurado(input);
      atualizarContador(input);
    });

    area.querySelectorAll(".input-reacao").forEach(function (radio) {
      if (estados[radio.name] === radio.id) {
        radio.checked = true;
        marcarRestaurado(radio);
      }
    });
  }

  lista.addEventListener("change", function (evento) {
    const input = evento.target;

    liberarAnimacao(input);

    if (input.matches(".input-curtir, .input-salvar")) {
      estados[input.id] = input.checked;
      atualizarContador(input);
      gravar(CHAVE_ESTADOS, estados);
    }

    if (input.matches(".input-reacao")) {
      estados[input.name] = input.id;
      gravar(CHAVE_ESTADOS, estados);
    }
  });

  function criarPost(post) {
    const artigo = molde.content.firstElementChild.cloneNode(true);
    artigo.id = post.id;

    artigo.querySelectorAll("[id], [for], [name]").forEach(function (elemento) {
      ["id", "for", "name"].forEach(function (atributo) {
        const valor = elemento.getAttribute(atributo);
        if (valor) {
          elemento.setAttribute(atributo, valor.replace("NOVO", post.id));
        }
      });
    });

    const tempo = artigo.querySelector("time");
    tempo.setAttribute("datetime", post.data);
    tempo.textContent = new Date(post.data).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });

    artigo.querySelector(".texto-publicacao").textContent = post.texto;

    artigo.querySelector(".botao-excluir").addEventListener("click", function () {
      excluirPost(post.id, artigo);
    });

    prepararInteracoes(artigo);
    return artigo;
  }

  function excluirPost(id, artigo) {
    if (!confirm("Excluir esta publicação?")) {
      return;
    }

    const posts = ler(CHAVE_POSTS, []).filter(function (post) {
      return post.id !== id;
    });
    gravar(CHAVE_POSTS, posts);

    delete estados["curtir-" + id];
    delete estados["salvar-" + id];
    delete estados["reacao-" + id];
    gravar(CHAVE_ESTADOS, estados);

    artigo.remove();
    caixaTexto.focus();
  }

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const texto = caixaTexto.value.trim();

    if (texto === "") {
      alert("Escreva alguma coisa antes de publicar.");
      caixaTexto.focus();
      return;
    }

    const post = {
      id: "meu-post-" + Date.now(),
      texto: texto,
      data: new Date().toISOString()
    };

    lista.prepend(criarPost(post));

    const posts = ler(CHAVE_POSTS, []);
    posts.unshift(post);
    gravar(CHAVE_POSTS, posts);

    caixaTexto.value = "";
    caixaTexto.focus();
  });

  prepararInteracoes(lista);

  ler(CHAVE_POSTS, []).reverse().forEach(function (post) {
    lista.prepend(criarPost(post));
  });

  const lateral = document.getElementById("barra-lateral-feed");

  if (lateral) {
    const CHAVE_LATERAL = "devnetwork-feed-lateral";
    const estadoLateral = ler(CHAVE_LATERAL, {});
    estadoLateral.seguindo = estadoLateral.seguindo || {};
    estadoLateral.ocultos = estadoLateral.ocultos || {};

    lateral.querySelectorAll(".input-seguir").forEach(function (input) {
      input.checked = estadoLateral.seguindo[input.id] === true;
      input.addEventListener("change", function () {
        estadoLateral.seguindo[input.id] = input.checked;
        gravar(CHAVE_LATERAL, estadoLateral);
      });
    });

    lateral.querySelectorAll(".assunto").forEach(function (assunto) {
      const menu = assunto.querySelector(".mais-opcoes");
      const naoInteresse = assunto.querySelector(".botao-nao-interesse");
      const desfazer = assunto.querySelector(".botao-desfazer");

      if (estadoLateral.ocultos[assunto.id]) {
        assunto.classList.add("oculto");
      }

      naoInteresse.addEventListener("click", function () {
        menu.open = false;
        assunto.classList.add("oculto");
        estadoLateral.ocultos[assunto.id] = true;
        gravar(CHAVE_LATERAL, estadoLateral);
        desfazer.focus();
      });

      desfazer.addEventListener("click", function () {
        assunto.classList.remove("oculto");
        delete estadoLateral.ocultos[assunto.id];
        gravar(CHAVE_LATERAL, estadoLateral);
        menu.querySelector("summary").focus();
      });
    });

    document.addEventListener("click", function (evento) {
      lateral.querySelectorAll(".mais-opcoes[open]").forEach(function (menu) {
        if (!menu.contains(evento.target)) {
          menu.open = false;
        }
      });
    });

    document.addEventListener("keydown", function (evento) {
      if (evento.key !== "Escape") {
        return;
      }
      lateral.querySelectorAll(".mais-opcoes[open]").forEach(function (menu) {
        menu.open = false;
        menu.querySelector("summary").focus();
      });
    });
  }
})();
