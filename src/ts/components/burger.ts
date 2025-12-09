const burgerBtn = document.querySelector(".header__burger-btn");
const menu = document.querySelector(".menu");

export function burgerMenu() {
    toggleMenu();
    resizeListeners();
}

function toggleMenu() {
    if (!burgerBtn || !menu) return;

    burgerBtn.addEventListener("click", () => {
        menu.classList.toggle("menu_active")
        burgerBtn.classList.toggle("header__burger-btn_active");
    })
}

function resizeListeners() {
    if (!burgerBtn || !menu) return;

    window.addEventListener("resize", ()=>{
        if (window.innerWidth >= 1024 && burgerBtn.classList.contains("header__burger-btn_active")) {
            burgerBtn.classList.remove("header__burger-btn_active");
            menu.classList.remove("menu_active");
        }
    });
}