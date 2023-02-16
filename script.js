const menu = document.querySelector(".burger-menu")
const closeMenu = document.querySelector(".close-menu")
const dropMenu = document.querySelectorAll(".row.drop-menu")
const sideMenu = document.querySelectorAll(".row.side-menu")
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
    document.body.classList.toggle("show")
    document.querySelector(".hero").classList.toggle("opacity-change")
}
sideMenu.forEach((item) => {
    item.addEventListener("click", showDropMenu)
})

// function showSideMenu(event) {
//     let target = event.currentTarget

// }


dropMenu.forEach((item) => {
    item.addEventListener("pointerover", showDropMenu)
})

function showDropMenu(event) {
    console.log(event.target, event.currentTarget)
    let target = event.currentTarget
    if (target.classList.contains("features")) {
        // let featuresList = document.querySelector(".features-list")
        // let cord = target.getBoundingClientRect()
        // console.log(featuresList, cord)
        // let left = cord.left- featuresList.offsetWidth / 2 + "px"
        // let top = cord.top + target.offsetHeight + 10 + "px"
        // featuresList.style.left = left
        // featuresList.style.top = top
        let element = document.querySelector(".features-list")
        if (event.type === "click") {
            showSideMenu(target, element)
            return
        }

        move(element, target)
        // if (element.classList.contains("toggle")) {
            // console.
        // } else {
        //     element.classList.toggle("toggle")
        // }
    } else if (target.classList.contains("company")) {
        // move(".company-list", target)
        let element = document.querySelector(".company-list")
        if (event.type === "click") {
            showSideMenu(target, element)
            return
        }
        move(element, target)
        // if (element.classList.contains("toggle")) {
        // } else {
        //     element.classList.toggle("toggle")
        // }
    }


}

function showSideMenu(target, element) {
    let elements = document.querySelectorAll(".list")
    console.log("running so")
    elements.forEach((element) => {
        if (element.classList.contains("toggle")) {
            // element.classList.remove("toggle")
            element.classList.toggle("toggle")
            console.log("no menu", element)
            target.querySelector(".arrow").src = "./images/icon-arrow-down.svg"
        } else {
            // console.log("menu")
            console.log("menu", element)
            target.querySelector(".arrow").src = "./images/icon-arrow-up.svg"
            const cord = target.getBoundingClientRect()
            console.log("Appending")
            let left = cord.left- element.offsetWidth / 2 + "px"
            let top = cord.top + target.offsetHeight + 10 + "px"
            element.style.left = left
            element.style.top = top
            // element.style.display = "block"
            element.style.position = "fixed"
            element.classList.toggle("toggle")
        }
    })
    // target.append(element)
   

}

function move(element, target) {
    console.log(element)
    let cord = target.getBoundingClientRect()
    // console.log(featuresList, cord)
    let left = cord.left- element.offsetWidth / 2 + "px"
    let top = cord.top + target.offsetHeight + 10 + "px"
    element.style.left = left
    element.style.top = top
    // element.style.display = "block"
    element.classList.toggle("toggle")
    target.querySelector(".arrow").src = "./images/icon-arrow-up.svg"

}