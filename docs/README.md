# DevNetwork — Rede Social para Desenvolvedores

Projeto da disciplina **Desenvolvimento Front-End para Web** — entrega final (07/11/2026).

## Tema

A DevNetwork é uma rede social voltada para desenvolvedores, principalmente quem está começando na programação. A ideia é juntar em um só lugar o que hoje fica espalhado entre LinkedIn, Instagram, GitHub e Discord: publicar o que está estudando, mostrar projetos, encontrar gente para colaborar, participar de comunidades por tecnologia e procurar vagas.

## Objetivos

- Construir um site com várias páginas interligadas usando HTML5 semântico (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`).
- Simular as principais telas de uma rede social para devs (feed, perfil, explorar, projetos, vagas, mensagens etc.).
- Criar formulários com validação em HTML5 (`required`, `email`, `tel`, `date`, `number` e `pattern`).
- Usar recursos multimídia (`video`, `audio` e `iframe`).
- Adicionar interações simples com JavaScript.
- Pesquisar e comparar opções de hospedagem e domínio para publicar o site.
- Praticar trabalho em equipe com Git e GitHub.

## Como abrir o site

- **Pelo GitHub Pages ou pelo Live Server:** abra o `index.html` da raiz. Ele leva direto para `paginas/Inicio.html`.
- **Abrindo o arquivo direto:** dê dois cliques em `paginas/Inicio.html`. Todos os caminhos são relativos, então o site funciona sem servidor.

## Estrutura de pastas

```
ProjetodoPaulo/
├── index.html                 Leva para a página inicial (paginas/Inicio.html)
├── paginas/
│   ├── Inicio.html            Página inicial (apresentação, vídeo e áudio)
│   ├── pag1.html ... pag11.html   As 11 telas, uma por integrante
│   ├── perfil-messi.html      Perfis de exemplo abertos pela página Rede
│   ├── perfil-ronaldo.html
│   ├── contato.html           Formulário de contato, mapa e equipe
│   └── orcamento_hospedagem.html  Comparação de hospedagem e domínio
├── css/
│   ├── style.css              CSS compartilhado por TODAS as páginas
│   └── pag1.css ... pag10.css Estilos exclusivos de cada tela
├── js/
│   ├── acessibilidade.js      Salva as opções do painel em todas as páginas
│   └── pag1.js, pag3.js ...   Interações de cada página
├── img/                       Imagens, GIFs e o ícone da aba (favicon.svg)
├── assets/                    Vídeo e áudio da página inicial
└── docs/
    ├── README.md
    ├── diario_de_bordo.md
    └── testes_e_validacoes.md
```

## Estrutura semântica das páginas

Todas as páginas seguem a mesma estrutura:

```
header  →  nav  →  main  →  footer
                    ├── section / article   (conteúdo, à esquerda)
                    └── aside               (informações extras, à direita)
```

No celular, o `aside` vai para baixo do conteúdo.

## Organização do CSS

Todas as páginas carregam primeiro o `css/style.css`, que tem a paleta de cores (variáveis), o cabeçalho, o menu, o rodapé, os formulários, as tabelas, os cartões e o painel de acessibilidade. Depois, cada página carrega o próprio arquivo (`pag2.css`, `pag5.css`...), só com o que é exclusivo dela.

Regras combinadas:

- Não escrever cores soltas: usar sempre as variáveis do `style.css` (`var(--cor-texto)`, `var(--cor-fundo-cartao)`...). Assim o tema escuro e o alto contraste funcionam em todas as páginas.
- Caminhos sempre relativos (`../css/style.css`), nunca começando com `/`, para o site funcionar abrindo o arquivo direto, no Live Server e no GitHub Pages.
- Cada integrante mexe no próprio `pagN.css`. Mudanças no `style.css` são combinadas com o grupo, para evitar conflito no Git.

## JavaScript

O JavaScript só acrescenta funções. Sem ele, as páginas continuam abrindo e mostrando todo o conteúdo.

| Arquivo | Página | O que faz |
|---------|--------|-----------|
| `acessibilidade.js` | Todas | Salva as opções do painel de acessibilidade e mantém em todas as páginas. |
| `pag1.js` | Feed | Publicar e excluir posts, contadores de curtir e salvar, reações salvas, Seguir e "Não tenho interesse" na lateral. |
| `pag3.js` | Explorar | Busca de desenvolvedores (por nome ou tecnologia) e botão Conectar. |
| `pag6.js` | Comunidades | Participar e sair, busca, abrir comunidade, mural de recados e aviso ao enviar o formulário. |
| `pag7.js` | Vagas | Filtro por tecnologia, senioridade e modalidade, botão Limpar filtros, aviso de "nenhuma vaga" e botão Candidatar-se. |
| `pag8.js` | Rede | Busca de pessoas, conectar, cancelar pedido, aceitar, recusar e desfazer. |
| `pag9.js` | Mensagens | Envia a mensagem para a conversa aberta. |
| `pag10.js` | Notificações | Botão "Marcar todas como lidas". |
| `pag11.js` | Empresa | Botão "Seguir empresa" com contador. |
| `contato.js` | Contato | Mensagem de confirmação ao enviar o formulário. |

## Acessibilidade

Todas as páginas têm o link "Pular para o conteúdo principal" e o painel de acessibilidade (botão na lateral direita), feito com HTML e CSS (`<details>` + checkboxes + `:has()`): modo para daltônicos, alto contraste, aumentar texto, destacar links, espaçamento de leitura, pausar animações e tema escuro. O `acessibilidade.js` salva as escolhas, que continuam ligadas ao trocar de página.

## Equipe, páginas e commits

Contagem de commits no repositório até 04/11/2026 (91 no total).

| Integrante | Página | Tela | Commits | Principais contribuições |
|------------|--------|------|:-------:|--------------------------|
| Giovanni Rodrigues | `pag1.html` | Feed | 19 | Feed com posts, reações e barra lateral; CSS compartilhado; `acessibilidade.js`; estrutura semântica nas 14 páginas; correções da entrega final. |
| João Cassiano | `pag2.html` | Perfil | 11 | Página de perfil e `pag2.css`. |
| Fellipe Aguiar | `pag3.html` | Explorar | 14 | Primeiro commit e estrutura do projeto; página Explorar com busca; organização das pastas e documentação; orçamento; vídeo e áudio. |
| Davi | `pag4.html` | Projetos | 4 | Página de Projetos. |
| Gabriel Rocha | `pag5.html` | Workspace | 10 | Quadro kanban do Workspace e `pag5.css`. |
| Leonardo | `pag6.html` | Comunidades | 5 | Página de Comunidades, `pag6.css` e `pag6.js`. |
| Anderson | `pag7.html` | Vagas | 10 | Página de Vagas, filtros e `pag7.js`. |
| Guilherme | `pag8.html` | Rede | 12 | Página Rede, `pag8.js`, perfis do Messi e do Ronaldo, caminhos relativos em todas as páginas. |
| Gustavo Amorim (saiu do grupo) | `pag9.html` | Mensagens | 1 | Página de Mensagens. |
| Kayky | `pag10.html` | Notificações | 0 | Página de Notificações (sem commits na própria conta). |
| Julio | `pag11.html` | Empresa | 2 | Página da Empresa com TechStart e Nexus Pay Tech. |

Também aparecem no histórico 3 commits da conta **Gabriel Selotto**, com ajustes no Perfil. O commit de cada integrante, com data, descrição e link para o GitHub, está no [diário de bordo](diario_de_bordo.md). A lista completa também pode ser vista em https://github.com/fellipeaguiardev/ProjetodoPaulo/commits/main.

As páginas gerais (`Inicio.html`, `contato.html`, `orcamento_hospedagem.html` e os dois perfis de exemplo) e a documentação foram feitas em conjunto.

## Repositório

https://github.com/fellipeaguiardev/ProjetodoPaulo

## Documentos relacionados

- [Diário de bordo](diario_de_bordo.md)
- [Testes e validações](testes_e_validacoes.md)
- [Orçamento de hospedagem e domínio](../paginas/orcamento_hospedagem.html)