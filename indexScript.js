const btnEquipe = document.getElementById("btnEquipe");
const btnFechar = document.getElementById("btnFechar");

const menuEquipe = document.getElementById("menuEquipe");
const menuOverlay = document.getElementById("menuOverlay");


// ABRIR MENU
btnEquipe.addEventListener("click", () => {

    menuEquipe.classList.add("ativo");
    menuOverlay.classList.add("ativo");

});


// FECHAR PELO X
btnFechar.addEventListener("click", () => {

    menuEquipe.classList.remove("ativo");
    menuOverlay.classList.remove("ativo");

});


// FECHAR CLICANDO FORA DO MENU
menuOverlay.addEventListener("click", () => {

    menuEquipe.classList.remove("ativo");
    menuOverlay.classList.remove("ativo");

});


// FECHAR COM A TECLA ESC
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        menuEquipe.classList.remove("ativo");
        menuOverlay.classList.remove("ativo");

    }

});