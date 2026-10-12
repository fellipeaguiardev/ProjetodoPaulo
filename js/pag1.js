(function (){
    "use strict";

    const formulario=document.getElementById("form-publicar");
    const caixaTexto=document.getElementById("publicacao");
    const lista=document.getElementById("lista-publicacoes");
    const molde=document.getElementById("modelo-publicacao");

    if(!formulario || !caixaTexto || !lista || !molde){
        return;
    }

    const CHAVE_POSTS="devnetwork-meus-posts";
    const CHAVE_ESTADOS="devnetwork-feed-estados";

    function ler(chave,padrao){
        try{
            return JSON.parse(localStorage.getItem(chave)) || padrao;
        } catch(erro){
            return padrao;
        }
    }

    function gravar(chave,valor){
        try{
            localStorage.getItem(chave,JSON.stringify(valor))
        } catch(erro){
            return;
        }
    }

    let estados=ler(CHAVE_ESTADOS,{});

    function contadorDe(input){
        const acao=input.closet(".acao");
        return acao ? acao.querySelector(".contador"):null;
    }

    function atulizarContador(input){
        const contador=contadorDe(input);
        if(!contador){
            return;
        }
        if(contador.dataset.base===undefined){
            contador.dataset.base-parseInt(contador.textContent.replace(/\D/g, ""), 10 || 0)
        }
        const total=Number(contador.dataset.base)+(input.checked ? 1:0);
        contador.textContent=total.toLocaleString("pt-BR")
    }
})