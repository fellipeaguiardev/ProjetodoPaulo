DevNetwork — Rede Social para Desenvolvedores

Projeto da disciplina **Desenvolvimento Front-End para Web** — 1ª entrega.

Tema

A DevNetwork é uma rede social voltada para desenvolvedores, principalmente quem está começando na programação. A ideia é juntar em um só lugar o que hoje fica espalhado entre LinkedIn, Instagram, GitHub e Discord: publicar o que está estudando, mostrar projetos, encontrar gente para colaborar, participar de comunidades por tecnologia e procurar vagas.

Objetivos

- Construir um site com várias páginas interligadas usando HTML5 semântico (header, nav, main, section, article, footer).
- Simular as principais telas de uma rede social para devs (feed, perfil, explorar, projetos, vagas, mensagens etc.).
- Criar um formulário de contato com validação em HTML5 (required, email, tel, date, number e pattern).
- Usar recursos multimídia (video, audio e iframe).
- Pesquisar e comparar opções de hospedagem e domínio para publicar o site.
- Praticar trabalho em equipe com Git e GitHub.

Estrutura de pastas

```
devnetwork/
├── index.html                  Página inicial (resumo do tema + menu)
├── paginas/                    Páginas de conteúdo (uma por integrante)
├── css/
│   ├── style.css               CSS compartilhado por TODAS as páginas
│   └── pag1.css ... pag10.css  Estilos exclusivos de cada tela
├── js/                         Scripts (vazio nesta entrega)
├── img/                        Imagens do site
├── assets/                     Arquivos complementares
└── docs/                       Documentação do projeto
    ├── README.md
    ├── diario_de_bordo.md
    ├── testes_e_validacoes.md
```


Organização do CSS

Todas as páginas carregam primeiro o `css/style.css`, que tem a paleta de cores (variáveis), o cabeçalho, o menu, o rodapé, formulários, tabelas, cartões e o painel de acessibilidade. Depois, se precisar, cada página carrega o próprio arquivo (`pag2.css`, `pag5.css`...), só com o que é exclusivo dela.

Regras combinadas:

- Não escrever cores soltas: usar sempre as variáveis do `style.css` (`var(--cor-texto)`, `var(--cor-fundo-cartao)`...). Assim o tema escuro e o alto contraste funcionam em todas as páginas.
- Caminhos sempre relativos (`../css/style.css`), nunca começando com `/`, para o site funcionar abrindo o arquivo direto, no Live Server e no GitHub Pages.
- Cada integrante mexe no próprio `pagN.css`; mudanças no `style.css` são combinadas com o grupo, para evitar conflito no Git.

Acessibilidade

Todas as páginas têm o link "Pular para o conteúdo principal" e o painel de acessibilidade (botão na lateral direita), feito só com HTML e CSS (`<details>` + checkboxes + `:has()`): modo para daltônicos, alto contraste, aumentar texto, destacar links, espaçamento de leitura, pausar animações e tema escuro. Sem JavaScript, as opções não ficam salvas ao trocar de página.

Páginas e divisão de funções

Cada integrante ficou responsável por uma das 11 telas de conteúdo:

| Integrante          | Página        | Tela         |
|---------------------|---------------|--------------|
| Giovanni Rodrigues  |  pag1.html    | Feed         |
| João Cassiano        |  pag2.html    | Perfil       |
| Fellipe Aguiar      |  pag3.html    | Explorar     |
| Davi                |  pag4.html    | Projetos     |
| Gabriel             |  pag5.html    | Workspace    |
| Leonardo            |  pag6.html    | Comunidades  |
| Anderson            |  pag7.html    | Vagas        |
| Guilherme           |  pag8.html    | Rede         |
| Gustavo             |  pag9.html    | Mensagens    |
| Kayky               |  pag10.html   | Notificações |
| Julio               |  pag11.html   | Empresa      |

Páginas gerais (index.html, contato.html, orcamento_hospedagem.html) e a documentação foram feitas em conjunto pela equipe.



Repositório

https://github.com/fellipeaguiardev/ProjetodoPaulo

Documentos relacionados

- [Diário de bordo](diario_de_bordo.md)
- [Testes e validações](testes_e_validacoes.md)
- [Orçamento](../paginas/orcamento_hospedagem.html)
