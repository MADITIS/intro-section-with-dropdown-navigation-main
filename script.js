const menu = document.querySelector(".burger-menu")
const closeMenu = document.querySelector(".close-menu")
// console.log(menu)
window.addEventListener("click", ()=> {
    const sideMenu = document.querySelector(".side-bar")
    // sideMenu.classList.remove("show")

})
menu.addEventListener('click', addSideBar)
closeMenu.addEventListener("click", addSideBar)
function addSideBar() {
    const sideMenu = document.querySelector(".side-bar")
    sideMenu.classList.toggle("show")
}

