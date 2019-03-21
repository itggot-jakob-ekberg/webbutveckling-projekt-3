function menu(event){
    let hea = document.querySelector("header")
    hea.classList.toggle("activate")

    let links = document.querySelector("a")
    links.classList.toggle("a_activate")

    let icon = document.querySelector("#menubutton")
    if(icon.innerHTML == "close"){
        icon.innerHTML = "menu"
    }else{
        icon.innerHTML = "close"
    }
}