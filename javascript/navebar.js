function openNav() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

document.getElementById("menu-toggle").addEventListener("click", function () {
    if (document.getElementById("sidebar").style.width === "250px") {
        closeNav();
    } else {
        openNav();
    }
});
