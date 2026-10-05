Testes e Validações — DevNetwork

1. Navegação (links entre páginas)

Verificamos todos os links internos (href, src e poster) de todas as páginas: nenhum link quebrado.

| Teste                                                        | Resultado |
|--------------------------------------------------------------|-----------|
| Todas as páginas têm o mesmo menu (Início … Orçamento)       | OK        |
| Todos os arquivos CSS são encontrados na pasta `css/`        | OK        |
| Todas as imagens locais são encontradas na pasta `img/`      | OK        |
| Links de "Ver perfil" na página Rede levam ao Perfil         | OK        |

 2. Formulário de contato (contato.html)

| Campo              | Validação usada                                  | Teste feito                         | Resultado esperado          |
|--------------------|--------------------------------------------------|-------------------------------------|-----------------------------|
| Nome               | `required`, `minlength="3"`                      | Enviar vazio / com 2 letras         | Bloqueia o envio            |
| E-mail             | `type="email"`, `required`                       | Digitar `teste@`                    | Bloqueia o envio            |
| Telefone           | `type="tel"`, `required`, `pattern`              | Digitar `11912345678` (sem máscara) | Bloqueia o envio            |
| CPF                | `pattern` (000.000.000-00)                       | Digitar `12345678900`               | Bloqueia o envio            |
| Data de nascimento | `type="date"`, `required`, `min`, `max`          | Deixar vazio                        | Bloqueia o envio            |
| Experiência        | `type="number"`, `required`, `min="0"`, `max="50"` | Digitar `-1` ou `60`              | Bloqueia o envio            |
| Assunto            | `select` com `required`                          | Não escolher opção                  | Bloqueia o envio            |
| Mensagem           | `required`, `minlength="10"`                     | Escrever "oi"                       | Bloqueia o envio            |
| Aceite             | `checkbox` com `required`                        | Não marcar                          | Bloqueia o envio            |

Todos os campos têm `<label for="...">` ligado ao `id` do campo.

3. Multimídia

| Recurso   | Página          | Detalhes                                  |
|-----------|-----------------|-------------------------------------------|
| `<video>` | `index.html`    | `controls` e `poster="img/poster-video.svg"` |
| `<audio>` | `index.html`    | `controls`                                |
| `<iframe>`| `contato.html`  | Mapa do OpenStreetMap com `title`         |

4. Validação W3C

Todas as páginas foram validadas com o Nu HTML Checker (o mesmo validador do https://validator.w3.org/).

| Página                       | Erros | Observação |
|------------------------------|-------|------------|
| index.html                   | 0     |            |
| pag1.html a pag11.html       | 0     |            |
| contato.html                 | 0     | Versões antigas do validador acusam `loading` no `<iframe>`, mas o atributo é válido no HTML atual. |
| orcamento_hospedagem.html    | 0     |            |

Os avisos de CSS sobre `:has()` também são de versões antigas do validador: o seletor é padrão e funciona no Chrome, Edge, Firefox e Safari atuais.

5. Testes visuais e de acessibilidade

| Teste                                                              | Resultado |
|--------------------------------------------------------------------|-----------|
| Todas as páginas com o mesmo cabeçalho, menu, painel e rodapé      | OK        |
| Link do menu da página atual destacado (e com `aria-current`)      | OK        |
| Nenhuma página rola para o lado em 380 px (celular) e 1200 px      | OK        |
| Tema escuro legível em todas as páginas                            | OK        |
| Alto contraste em todas as páginas                                 | OK        |
| Painel abre e fecha pelo teclado (Tab + Enter)                     | OK        |
| Botão "Restaurar padrão" desmarca todas as opções                  | OK        |
| Links internos, imagens e poster do vídeo encontrados              | OK        |

6. Pendências da 1ª entrega que foram corrigidas

- `index.html` tinha sido apagado da pasta: restaurado pelo histórico do Git.
- `pag1.html`, `pag5.html` e `pag7.html` usavam caminho absoluto (`/css/...`) e `pag10.html` apontava para `/css/p.css`, que não existe: todos trocados por `../css/`.
- `pag6.html` tinha cabeçalho, menu e rodapé de outro projeto ("Liga dos Dev"), com links quebrados: refeitos no padrão DevNetwork.
- `pag5.html` marcava "Feed" como página ativa, tinha dois `<h1>` e botões sem `type`; o `pag5.css` tinha um seletor quebrado (`a .secao-titulo p`) e um `* { margin: 0 }` que afetava o site inteiro.
- `pag2.css`: o texto de apoio estava branco sobre fundo branco.
- `pag7.html`: erros de digitação nas vagas ("Sãp Paulo", "á 15 Km", "hTML") e cabeçalho com `gap: 310px` que quebrava no celular.
- `pag10.css` usava outra fonte (Segoe UI) e outro tom de azul: alinhado à paleta do site.
- Menu "Perfil.10", nome "Leonel Messi", "João Cassini" e textos alternativos modelo corrigidos.
- Rodapé com "[SUA EMPRESA] LTDA" trocado em todas as páginas.
- `pag3.html`: estilos `style="..."` foram para o `pag3.css`; imagem do Freepik ganhou crédito.
- `img/siteexplorar.png` (2,5 MB) convertida para `img/siteexplorar.jpg` (138 KB).
- Poster do vídeo (`img/poster-video.svg`) criado, porque não existia.
- `site.css`, `pag1.css` e `pag3.css` (quase iguais) viraram o `style.css` compartilhado + arquivos por página.
- Painel de acessibilidade presente em todas as páginas.
- `docs/orcamento_hospedagem.html` era uma cópia idêntica de `paginas/orcamento_hospedagem.html`: removida.

7. Ainda em aberto

- Os ícones `img/comentar.svg`, `compartilhar.svg`, `coracao.svg` e `salvar.svg` não são usados (o Feed desenha os ícones direto no HTML com `<svg>`).
- A imagem do Freepik é carregada do site deles; o ideal é baixá-la para a pasta `img/` respeitando a licença.
- Sem JavaScript, as opções de acessibilidade não ficam salvas ao trocar de página.
