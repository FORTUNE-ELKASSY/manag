const nav = document.querySelector(".nav-links")
const menuOpen = document.querySelector(".openIcon")
const menuClose = document.querySelector(".closeIcon")
const navLinks = document.querySelectorAll('.nav-links a')

navLinks.forEach(navLink => {
    navLink.addEventListener("click", function(){
        nav.style.top = "-34%"
        menuOpen.style.display = "block"
        menuClose.style.display = "none"
    })
})


function openMenu(){
    nav.style.top = "34%"
    menuOpen.style.display = "none"
    menuClose.style.display = "block"
}

function closeMenu(){
    nav.style.top = "-34%"
    menuOpen.style.display = "block"
    menuClose.style.display = "none"
}