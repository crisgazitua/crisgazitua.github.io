function cambiarTexto() {
    var nuevoTexto = document.getElementById("inputText").value;
    document.getElementById("seccionCambiante").innerText = nuevoTexto;
}

var img=document.createElement('img');
img.src='IMG_0801.HEIC';
document.body.appendChild(img);