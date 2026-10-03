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

Validar cada página em https://validator.w3.org/ (aba "Validate by File Upload") e anotar o resultado aqui. Se possível, guardar um print de cada resultado na pasta `docs/`.

| Página                       | Erros | Avisos | Data |
|------------------------------|-------|--------|------|
| index.html                   |       |        |      |
| pag1.html                    |       |        |      |
| pag2.html                    |       |        |      |
| pag3.html                    |       |        |      |
| pag4.html                    |       |        |      |
| pag5.html                    |       |        |      |
| pag6.html                    |       |        |      |
| pag7.html                    |       |        |      |
| pag8.html                    |       |        |      |
| pag9.html                    |       |        |      |
| pag10.html                   |       |        |      |
| pag11.html                   |       |        |      |
| contato.html                 |       |        |      |
| orcamento_hospedagem.html    |       |        |      |

5. Pendências encontradas para a entrega final

Problemas que vimos durante a revisão e que vamos corrigir na entrega final (nesta entrega deixamos o código como foi feito, para registrar a evolução):

- `pag1.html`: o link do menu aparece como "Perfil.10" em vez de "Perfil".
- `pag1.html` e `pag3.html`: rodapé ainda com o texto modelo "[SUA EMPRESA] LTDA. CNPJ: 00.000.000/0000-00".
- `pag1.html`: imagem do post do Cristiano Ronaldo com `alt="Descreva o que aparece na foto"` (texto modelo). Nome "Leonel Messi" escrito diferente das outras páginas ("Lionel").
- `pag3.html`: estilos escritos direto no HTML (`style="..."`), que devem ir para o CSS.
- `pag3.html`: imagem externa do Freepik sem indicação de fonte/autoria na página.
- `img/siteexplorar.png` tem cerca de 2,5 MB — precisa ser otimizada (ex.: converter para JPG/WebP e reduzir tamanho).
- Ícones `img/comentar.svg`, `compartilhar.svg`, `coracao.svg` e `salvar.svg` não são usados por nenhuma página.
- Três arquivos CSS (`site.css`, `pag1.css`, `pag3.css`): na entrega final devem virar um único `css/style.css`.
- O painel de acessibilidade só existe no Feed e no Explorar.
