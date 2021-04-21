let butmenu = document.querySelectorAll(".butmenu")

marcnav()

function navegar (n) {
    sessionStorage.setItem("butmenunav",n)
    switch (n) {
        case 0: window.location.replace("agenda.html")
            break
        case 1: window.location.replace("loc.html")
            break
        case 2: window.location.replace("redes.html")
            break
        case 3: window.location.replace("sobre.html")
            break
        case 4: window.location.replace("pilares.html")
            break
        case 5: window.location.replace("peora.html")
            break
        case 6: window.location.replace("mission.html")
            break
        case 7: window.location.replace("foto.html")
            break
        default: window.location.replace("index.html")
    }
}

function marcnav () {
    let n = Number(sessionStorage.getItem("butmenunav"))
    butmenu[n].classList.add("menu-active")
}