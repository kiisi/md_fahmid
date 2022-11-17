let nav_menu = document.querySelector(".nav-menubar span")
let nav_close = document.querySelector(".mobile-nav-close--times")

let mobile_nav = document.querySelector(".mobile-nav")

nav_menu.addEventListener("click",()=>{
    mobile_nav.classList.add("show")
})
nav_close.addEventListener("click",()=>{
    mobile_nav.classList.remove("show")
})


/* Copyright year */
let copyright = document.querySelector(".footer-copyright span")
copyright.textContent = new Date().getFullYear()

