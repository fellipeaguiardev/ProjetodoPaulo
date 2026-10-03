# Diário de Bordo — DevNetwork

Registro das decisões, aprendizados e dificuldades da equipe durante a 1ª entrega. As datas seguem o histórico de commits do repositório no GitHub.

---

## 16/09/2026 — Planejamento das telas

- **O que foi feito:** criamos um protótipo com as 11 telas da rede social e a divisão de quem faria cada uma (arquivo `docs/prototipo_11_telas.html`).
- **Decisão:** cada integrante ficaria com uma página (`pag1.html` a `pag11.html`), para todo mundo conseguir trabalhar ao mesmo tempo sem mexer no arquivo do outro.
- **Decisão:** usar ícones em SVG (curtir, comentar, compartilhar, salvar) no lugar de imagens PNG.

## 24/09/2026 — Primeiro commit

- **O que foi feito:** subimos a estrutura inicial do projeto no GitHub com as 11 páginas e o menu de navegação igual em todas.
- **Aprendizado:** como criar um repositório, fazer `commit` e `push`.

## 25/09/2026 — Rodapés

- **O que foi feito:** os rodapés de todas as páginas foram padronizados com o texto de direitos autorais.
- **Dificuldade:** primeiros conflitos de Git quando duas pessoas mexeram nos mesmos arquivos.

## 26/09/2026 — Páginas 1 (Feed) e 3 (Explorar)

- **O que foi feito:** Feed ganhou a primeira versão com publicações e CSS próprio (`pag1.css`). Explorar ganhou busca, tabela de tecnologias em alta e galeria de imagens.
- **Decisão:** criar um `site.css` comum para as outras páginas.
- **Dificuldade:** algumas imagens ficaram muito pesadas (ex.: `siteexplorar.png` com cerca de 2,5 MB).

## 28/09/2026 — Manutenção do CSS

- **O que foi feito:** limpeza do CSS do Feed, removendo regras repetidas.

## 02/10/2026 — Acessibilidade

- **O que foi feito:** painel de acessibilidade (modo daltônico, alto contraste, aumentar texto, destacar links, espaçamento, pausar animações e tema escuro) no Feed e no Explorar, feito só com HTML e CSS (`<details>`, checkboxes e `:has()`), sem JavaScript.
- **O que foi feito:** reações com emojis nas publicações do Feed e fotos nos posts.
- **Aprendizado:** dá para fazer bastante interatividade só com HTML e CSS usando `:checked` e `:has()`.
- **Aprendizado:** uso de `aria-label`, `aria-hidden` e textos "visualmente ocultos" para leitores de tela.

## 03/10/2026 — Organização para a entrega

- **O que foi feito:** reorganizamos os arquivos na estrutura pedida pelo professor: `css/`, `js/`, `img/`, `assets/` e `docs/`. A pasta `images/` virou `img/`.
- **Decisão:** nos HTML já existentes mudamos **apenas** os caminhos dos arquivos (CSS e imagens) e acrescentamos os links Início, Contato e Orçamento no menu. O restante do código ficou como estava, para registrar a evolução real da equipe; as correções ficaram anotadas como pendências em [testes_e_validacoes.md](testes_e_validacoes.md).
- **O que foi feito:** criamos `index.html` (página inicial com vídeo e áudio), `contato.html` (formulário validado, mapa em `iframe` e lista dos membros) e `orcamento_hospedagem.html` (comparação de hospedagem e domínio).
- **Decisão:** nome do arquivo de orçamento sem "ç" para evitar problemas de link.
- **Decisão:** escolhemos GitHub Pages + domínio `.com.br` para a fase atual, e Hostinger para quando o site precisar de back-end (detalhes no relatório de orçamento).

---

## Principais aprendizados

- Organização de pastas faz diferença quando o projeto cresce e muita gente mexe junto.
- Tags semânticas deixam o código mais fácil de entender e ajudam na acessibilidade.
- O HTML5 já valida formulários sozinho com `required`, `type` e `pattern`.
- Git exige combinar quem mexe em qual arquivo para evitar conflitos.

## Principais dificuldades

- Conflitos de merge no Git.
- Manter o mesmo visual em todas as páginas com mais de um arquivo CSS.
- Imagens pesadas e sem tamanho padronizado.
