const menu = document.querySelector(".burger-menu")
const closeMenu = document.querySelector(".close-menu")
const dropMenu = document.querySelectorAll("drop-menu")
const sideMenu = document.querySelectorAll(".side-menu")
const listElements = document.querySelectorAll(".list")
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


dropMenu.forEach((item) => {
    item.addEventListener("pointerover", showDropMenu)
    item.addEventListener("pointerout", removeDropMenu)
    
})

function removeDropMenu(e) {
    let target = e.currentTarget
    if (target.classList.contains("features")) {
        const featuresList = target.querySelector(".features-list")
        if (featuresList.classList.contains("toggle")) {
            featuresList.classList.remove("toggle")
            target.querySelector(".arrow").src = "./images/icon-arrow-down.svg"
        }
        
    }else if (target.classList.contains("company")) {
        const companyList = target.querySelector(".company-list") 
        if (companyList.classList.contains("toggle")) {
            companyList.classList.remove("toggle")
            target.querySelector(".arrow").src = "./images/icon-arrow-down.svg"
        }
    }
}

function showDropMenu(event) {
    console.log(event.target, event.currentTarget)
    let target = event.currentTarget
    if (target.classList.contains("features")) {
        let element = target.querySelector(".features-list")
        if (event.type === "click") {
            showSideMenu(target, element)
            return
        }
        element.classList.add("toggle")
        target.querySelector(".arrow").src = "./images/icon-arrow-up.svg"

    } else if (target.classList.contains("company")) {
        let element = target.querySelector(".company-list")
        if (event.type === "click") {
            showSideMenu(target, element)
            return
        }
        element.classList.add("toggle")
        target.querySelector(".arrow").src = "./images/icon-arrow-up.svg"
    }


}

function showSideMenu(target, element) {
    if (element.classList.contains("toggle")) {
        element.classList.remove("toggle")
        target.querySelector(".arrow").src = "./images/icon-arrow-down.svg"
    } else {
        element.classList.add("toggle")
        // element.style.top = "15rem"
        element.style.position = "relative"
        element.style.top = "0"

        target.querySelector(".arrow").src = "./images/icon-arrow-up.svg"
    }

}
