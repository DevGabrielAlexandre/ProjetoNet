const btnRespon = document.querySelector(".btn-respon");
const navMenu   = document.querySelector(".nav-menu");
const carrosel = document.querySelector(".carousel");

btnRespon.addEventListener("click", () => {
    btnRespon.classList.toggle('active');
    navMenu.classList.toggle('active');
});

const mudar = document.querySelector(".mod");
var acao = document.querySelector(".mud");


acao.addEventListener("click", () => {
    mudar.classList.toggle('mudar');

});
