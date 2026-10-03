# DevNetwork — Rede Social para Desenvolvedores

Projeto da disciplina **Desenvolvimento Front-End para Web** — 1ª entrega.

## Tema

A **DevNetwork** é uma rede social voltada para desenvolvedores, principalmente quem está começando na programação. A ideia é juntar em um só lugar o que hoje fica espalhado entre LinkedIn, GitHub e Discord: publicar o que está estudando, mostrar projetos, encontrar gente para colaborar, participar de comunidades por tecnologia e procurar vagas.

## Objetivos

- Construir um site com várias páginas interligadas usando HTML5 semântico (`header`, `nav`, `main`, `section`, `article`, `footer`).
- Simular as principais telas de uma rede social para devs (feed, perfil, explorar, projetos, vagas, mensagens etc.).
- Criar um formulário de contato com validação em HTML5 (`required`, `email`, `tel`, `date`, `number` e `pattern`).
- Usar recursos multimídia (`video`, `audio` e `iframe`).
- Pesquisar e comparar opções de hospedagem e domínio para publicar o site.
- Praticar trabalho em equipe com Git e GitHub.

## Estrutura de pastas

```
devnetwork/
├── index.html                  Página inicial (resumo do tema + menu)
├── pag1.html ... pag11.html    Páginas de conteúdo (uma por integrante)
├── contato.html                Contato, formulário validado, mapa e membros
├── orcamento_hospedagem.html   Orçamento de hospedagem e domínio
├── css/                        Folhas de estilo (site.css, pag1.css, pag3.css)
├── js/                         Scripts (vazio nesta entrega)
├── img/                        Imagens do site
├── assets/                     Arquivos complementares
└── docs/                       Documentação do projeto
    ├── README.md
    ├── diario_de_bordo.md
    ├── testes_e_validacoes.md
    ├── orcamento_hospedagem.html
    └── prototipo_11_telas.html  Protótipo/planejamento inicial das 11 telas
```

> Observação: o enunciado cita o arquivo como `orçamento_hospedagem.html`. Usamos `orcamento_hospedagem.html` (sem "ç") porque acentos em nomes de arquivo costumam quebrar links em servidores web.

## Páginas e divisão de funções

Cada integrante ficou responsável por uma das 11 telas de conteúdo:

| Integrante          | Página        | Tela         |
|---------------------|---------------|--------------|
| Giovanni Rodrigues  | `pag1.html`   | Feed         |
| João Cassini        | `pag2.html`   | Perfil       |
| Fellipe Aguiar      | `pag3.html`   | Explorar     |
| Davi                | `pag4.html`   | Projetos     |
| Gabriel             | `pag5.html`   | Workspace    |
| Leonardo            | `pag6.html`   | Comunidades  |
| Anderson            | `pag7.html`   | Vagas        |
| Guilherme           | `pag8.html`   | Rede         |
| Gustavo             | `pag9.html`   | Mensagens    |
| Kayky               | `pag10.html`  | Notificações |
| Julio               | `pag11.html`  | Empresa      |

Páginas gerais (`index.html`, `contato.html`, `orcamento_hospedagem.html`) e a documentação foram feitas em conjunto pela equipe.

## Como abrir

Basta abrir o arquivo `index.html` no navegador. Não é preciso instalar nada.

## Repositório

https://github.com/fellipeaguiardev/ProjetodoPaulo

## Documentos relacionados

- [Diário de bordo](diario_de_bordo.md)
- [Testes e validações](testes_e_validacoes.md)
- [Relatório de orçamento de hospedagem e domínio](../paginas/orcamento_hospedagem.html)
