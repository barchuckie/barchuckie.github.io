function controlNavbar() {
    var navigationBar = document.getElementById("main-nav");
    if (navigationBar.classList.contains("responsive")) {
        navigationBar.classList.remove("responsive");
    } else {
        navigationBar.classList.add("responsive");
    }
}

function ready() {
    var navigationBar = document.getElementById("main-nav");
    navigationBar.style.display = 'flex';
}