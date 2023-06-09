const btnRespon = document.querySelector(".btn-respon");
const navMenu   = document.querySelector(".nav-menu");

btnRespon.addEventListener("click", () => {
    btnRespon.classList.toggle('active');
    navMenu.classList.toggle('active');
})