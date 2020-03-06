let textoNovo = document.querySelector("#txt");
let lista = document.querySelector(".lista");
let lista2 = document.querySelector(".lista2");
let botao = document.querySelector("#btn");
let quebra= document.createElement("br");

botao.addEventListener("click", function (evento) {
    evento.preventDefault();

    if (textoNovo.value == "" || textoNovo.value == " ") {
        let validation = document.createElement("span");
        let textoSp = document.createTextNode("Erro. Campo Obrigatorio!");

        validation.append(textoSp);
        botao.after(quebra);
        botao.after(validation);
    }

    else{
        let novoElemento = document.createElement("li");
        let input = document.createElement("input");
        input.type = "checkbox";

        novoElemento.append(input);
        novoElemento.append(textoNovo.value);
        textoNovo.value = "";
        lista.append(novoElemento);

    //-----------------------------------------------------------------------
        input.addEventListener("click", function () {
            input.type = "hidden";
            lista2.append(novoElemento);

            //-----------------------------------------------------------------------
            let botaoExcluir = document.createElement("button");
            botaoExcluir.type = "button";
            botaoExcluir.id = "btex";
            let textoB = document.createTextNode("x");

            botaoExcluir.append(textoB)
            novoElemento.append(botaoExcluir);

            botaoExcluir.addEventListener("click", function () {
                lista2.removeChild(novoElemento);
            });

        });
    }
});

//---------------------------------------------------
