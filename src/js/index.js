const btnAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imgBtnTrocaTema = document.querySelector(".imagem-botao");

btnAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if(modoEscuroAtivo){
        //body.classList.remove("modo-escuro");
        imgBtnTrocaTema.setAttribute("src", "./src/imgs/sun.png");
    }
    else{
        //body.classList.add("modo-escuro");
        imgBtnTrocaTema.setAttribute("src", "./src/imgs/moon.png");
    }
});
