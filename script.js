document.addEventListener("DOMContentLoaded",() => {
    alert("Welcome to my personal page!");
})

function cambiarTexto() {
    var nuevoTexto = document.getElementById("inputText").value;
    document.getElementById("seccionCambiante").innerText = nuevoTexto;
}

