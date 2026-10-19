# Diário de Bordo — DevNetwork

Registro das etapas, decisões, aprendizados e dificuldades da equipe no projeto da disciplina **Desenvolvimento Front-End para Web**.

- **Repositório:** https://github.com/fellipeaguiardev/ProjetodoPaulo
- **Período registrado:** 24/09/2026 a 13/10/2026
- **Commits no histórico até 07/10:** 56, feitos por 11 contas diferentes no Git

## Equipe e páginas

| Integrante         | Página       | Tela         |
|--------------------|--------------|--------------|
| Giovanni Rodrigues | `pag1.html`  | Feed         |
| João Cassiano      | `pag2.html`  | Perfil       |
| Fellipe Aguiar     | `pag3.html`  | Explorar     |
| Davi               | `pag4.html`  | Projetos     |
| Gabriel            | `pag5.html`  | Workspace    |
| Leonardo           | `pag6.html`  | Comunidades  |
| Anderson           | `pag7.html`  | Vagas        |
| Guilherme          | `pag8.html`  | Rede         |
| Gustavo            | `pag9.html`  | Mensagens    |
| Kayky              | `pag10.html` | Notificações |
| Julio              | `pag11.html` | Empresa      |

As páginas gerais (`Inicio.html`, `contato.html`, `orcamento_hospedagem.html`) e a documentação foram feitas em conjunto.

---

## Linha do tempo

### 24/09 a 28/09 — Início do projeto

| Data  | Commit    | Autor              | O que foi feito |
|-------|-----------|--------------------|-----------------|
| 24/09 | `9910773` | Fellipe Aguiar     | Primeiro commit: estrutura inicial com as 11 telas e o `site.css`. |
| 25/09 | `b045088` | Giovanni Rodrigues | Primeiro ajuste no `pag1.html`. |
| 25/09 | `8c26585` | Fellipe Aguiar     | Rodapés atualizados em 11 páginas. |
| 26/09 | `397cfee` | Giovanni Rodrigues | Primeira versão do Feed com CSS próprio (`pag1.css`). |
| 26/09 | `72a8659` | Fellipe Aguiar     | Página 3 — Explorar. |
| 28/09 | `ac2f729` | Giovanni Rodrigues | Manutenção do CSS do Feed. |

### 02/10 a 03/10 — Acessibilidade, fotos e documentação

| Data  | Commit    | Autor              | O que foi feito |
|-------|-----------|--------------------|-----------------|
| 02/10 | `6142b74` | Giovanni Rodrigues | Painel de acessibilidade e reações com emoji no Feed. |
| 02/10 | `1b27936` | Fellipe Aguiar     | Painel de acessibilidade na página Explorar. |
| 02/10 | `cdfe3ef` | Giovanni Rodrigues | Fotos nos posts do Feed. |
| 03/10 | `8ee6311` | Fellipe Aguiar     | Organização do projeto de acordo com o diário de bordo (34 arquivos). |
| 03/10 | `360ad43` | Fellipe Aguiar     | Ajuste dos arquivos `.md` da documentação. |
| 03/10 | `b0ec34c` | Fellipe Aguiar     | Página de orçamento de hospedagem. |
| 03/10 | `b502281` | Fellipe Aguiar     | Áudio e vídeo da página inicial. |
| 03/10 | `61c5097` | Fellipe Aguiar     | README atualizado. |

### 04/10 — Dia de fechamento da 1ª entrega (38 commits)

Foi o dia com mais atividade do projeto. Cada integrante subiu a própria página e, no fim do dia, foi feita a unificação do visual.

| Página | Commits principais | O que foi feito |
|--------|--------------------|-----------------|
| Comunidades | `05d74a2`, `01a9d1b` (leodev) | Página 6 e o CSS dela. |
| Perfil | `531c6f0` a `38f6b54` (joaocnds), `4f922f3`, `29d26cd`, `be955fb` (Gabriel Selotto) | Layout do perfil, `pag2.css`, correção do nome "João Cassiano", paleta compartilhada e contraste do texto de apoio. |
| Vagas | `45446e7` (andersosdev) | Página de vagas e CSS. |
| Rede | `a85e0d5` a `09bf25f` (guilherme lucas correa) | Página de rede e CSS. |
| Workspace | `3c37486` a `708b74c` (Gabriel Rocha da Silva) | Quadro kanban e `pag5.css`. |
| Projetos | `6baa3df`, `9bcd320`, `be7e3dd` (davicostaf777-debug) | Página de projetos e CSS. |
| Mensagens | `49a5a2a` (Gustavo Cavalcante de Amorim) | Página de mensagens. |

**`6aa30bf` — Ajustes finais para entrega (Giovanni, 34 arquivos):**

- `site.css`, `pag1.css` e `pag3.css` (quase iguais) viraram um único `css/style.css` compartilhado, e cada página ficou com o próprio `pagN.css` só para o que é exclusivo dela.
- O painel de acessibilidade foi colocado em todas as páginas.
- Caminhos de CSS quebrados foram corrigidos (`/css/p.css`, `csspag7.css`).
- A página de Comunidades, que tinha cabeçalho de outro projeto ("Liga dos Dev"), ficou no padrão do site.
- A imagem `siteexplorar.png` (2,5 MB) foi trocada por `siteexplorar.jpg` (138 KB).
- O poster do vídeo foi criado, porque não existia.
- O `index.html`, que tinha sido apagado, foi restaurado.

Depois disso: `3744f03` (Ajustes) e `1753785` (Ajustando página 4 e 9, com o `pag9.css`).

### 04/10 (noite) a 07/10 — Links e Workspace

| Data  | Commit    | Autor                  | O que foi feito |
|-------|-----------|------------------------|-----------------|
| 04/10 | `dcdcdcc` | Giovanni Rodrigues     | O `index.html` foi para `paginas/index.html`, com os caminhos do áudio e do vídeo ajustados. |
| 04/10 | `cd87133` | Giovanni Rodrigues     | A página inicial virou `paginas/Inicio.html`, e os links do menu passaram a começar com `/` (`/paginas/pag1.html`). |
| 05/10 | `4243530` | Giovanni Rodrigues     | Links do Início e do Contato no novo padrão. |
| 07/10 | `7bcfd40`, `989fd80` | Gabriel Rocha da Silva | Ajustes no Workspace (`pag5.html` e `pag5.css`). |

### 09/10 a 13/10 — 2ª etapa: JavaScript e estrutura semântica

> Os commits desta etapa foram feitos depois de 07/10. Este período foi registrado a partir das alterações feitas no projeto. Para ver o hash de cada commit, use `git log --oneline` na pasta do projeto.

**Acessibilidade salva em todas as páginas**
- Criado o `js/acessibilidade.js`. Ele guarda as opções do painel (tema escuro, alto contraste, daltônicos, aumentar texto etc.) no `localStorage` do navegador.
- A opção ligada numa página continua ligada nas outras, depois de recarregar e até em outra aba aberta.
- O script entra logo depois do painel, sem `defer`, para o tema escuro não "piscar" claro ao trocar de página.

**Feed com JavaScript (`js/pag1.js`)**
- Publicar posts. O post novo aparece no topo, é criado a partir de um `<template>` e o texto entra com `textContent`, para não virar código HTML.
- Os contadores de curtir e salvar aumentam ao clicar (128 → 129) e continuam assim depois de recarregar.
- As reações com emoji ficam salvas, e o "pulo" do emoji só acontece no clique, não ao abrir a página.
- Botão "Excluir" nos posts publicados pelo usuário, com confirmação.
- O validador W3C novo apontou `aria-label` dentro de `<label>` nos botões de curtir e salvar. O nome foi movido para um texto escondido dentro do próprio label.

**Barra lateral estilo X no Feed**
- "O que está acontecendo": memes de programação com GIFs (#DeployDeSexta, #CompilouDePrimeira, #QuemFezEsseCommit), menu "···" com "Não tenho interesse" e "Mostrar mais".
- "Quem seguir": botão Seguir/Seguindo.
- As escolhas de Seguir e "Não tenho interesse" ficam salvas.
- Os GIFs foram otimizados: o do CR7 caiu de 6,2 MB para cerca de 440 KB.
- Com "Pausar animações" ligado, os GIFs viram imagens paradas.
- O GIF do Messi foi trocado por uma versão animada (`img/messi2.gif`), porque a primeira tinha sido salva com um quadro só.

**Estrutura semântica pedida pelo professor (14 páginas)**
- Todas as páginas seguem `header` → `nav` → `main` → `footer`.
- O `nav` saiu de dentro do `header` e virou uma faixa própria.
- Dentro do `main`: conteúdo em `section` e `article` à esquerda, e um `aside` à direita com informações ligadas a cada página.
- O `aside` acompanha a rolagem (`position: sticky`). No celular, ele vai para baixo do conteúdo.
- No Workspace, as colunas do kanban viraram `section`, as tarefas viraram `article` e os títulos viraram `header`.
- A seção "Dados da empresa" (Contato) e a lista "Continue navegando" (Rede) foram para o `aside`.
- Corrigidos dois links quebrados: o poster do vídeo no Início e um link antigo para `index.html` na Rede.

---

## Decisões técnicas

- **Um CSS compartilhado + um por página.** O `style.css` tem cores, cabeçalho, menu, rodapé, formulários e acessibilidade. Cada integrante mexe só no próprio `pagN.css`, o que diminui conflitos no Git.
- **Cores só por variáveis** (`var(--cor-texto)`, `var(--cor-fundo-cartao)`...). É o que faz o tema escuro e o alto contraste funcionarem em todas as páginas sem reescrever regra por regra.
- **O JavaScript só acrescenta.** Curtir, salvar, reações e o painel de acessibilidade funcionam só com HTML e CSS (checkbox/radio + `:has()`). O JavaScript entra para salvar escolhas e publicar posts.
- **Links começando com `/`.** Funcionam no Live Server com a pasta do projeto aberta. Não funcionam abrindo o arquivo direto nem no GitHub Pages, onde o site fica em `/ProjetodoPaulo/`. Precisa ser revisto antes de publicar.

## Principais aprendizados

- Organização de pastas faz diferença quando o projeto cresce e muita gente mexe junto.
- Tags semânticas (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`) deixam o código mais fácil de entender e ajudam leitores de tela.
- O HTML5 já valida formulários sozinho com `required`, `type` e `pattern`.
- Git exige combinar quem mexe em qual arquivo para evitar conflitos.
- Variáveis de CSS permitem mudar o tema do site inteiro mudando poucos valores.
- O `localStorage` guarda dados no navegador entre uma página e outra, mas só no computador de quem está usando.
- `textContent` é mais seguro que `innerHTML` para mostrar texto digitado pelo usuário.
- O validador W3C muda com o tempo: a versão nova encontrou erros que a antiga não mostrava.

## Principais dificuldades

- **Conflitos de merge no Git.** A página de Mensagens chegou a ficar com as marcas `<<<<<<<`, `=======` e `>>>>>>>` no HTML, aparecendo na tela.
- **Visual diferente entre páginas** enquanto cada uma tinha o próprio CSS completo, cores próprias e até cabeçalho de outro projeto.
- **Imagens e GIFs pesados.** Uma imagem de 2,5 MB e um GIF de 6,2 MB.
- **Arquivos de versões diferentes misturados.** Um `pag1.html` antigo com um JavaScript novo fazia os posts pararem de funcionar. A solução foi substituir os arquivos juntos e recarregar com Ctrl + F5 por causa do cache.
- **Git sem identidade configurada** num computador novo (`unable to auto-detect email address`). A solução foi `git config user.name` e `git config user.email`.
- **GIF salvo com um quadro só.** Copiar um GIF pelo navegador às vezes salva só a imagem parada.

## Pendências

- Revisar os links que começam com `/` antes de publicar no GitHub Pages.
- Os ícones `img/comentar.svg`, `compartilhar.svg`, `coracao.svg` e `salvar.svg` não são usados por nenhuma página.
- A imagem do Freepik na página Explorar é carregada direto do site deles. O ideal é baixá-la para `img/`, respeitando a licença.
- Posts, curtidas e comentários ficam salvos só no navegador de quem usa. Para outras pessoas verem, seria preciso um back-end com banco de dados.