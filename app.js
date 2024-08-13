const textArea = document.querySelector(".caja-texto");
const mensaje = document.querySelector(".sms");
const butonEncriptar = document.getElementById("btn-encriptar");
const butonDesencriptar = document.getElementById("btn-desencriptar");


//  BOTON ENCRIPTAR

function btnEncriptar() {
    let texto_base = document.querySelector(".caja-texto").value;
    let textoEncriptado = encriptar(texto_base)
    document.querySelector(".sms").value = textoEncriptado;
    document.getElementById("siu").style.display = "block"
    document.getElementById("noen").style.display = "none"
    return
}

// LIMPIAR CAJA

document.addEventListener("DOMContentLoaded", function () {
    var inputField = document.getElementById("caja");
    inputField.value = "";
});

// ENCRIPTADOR

function encriptar(texto) {
    let textoEncriptado = texto
        .replace(/[aeiou]/g, vocales)
    return textoEncriptado
}

function vocales(vocal) {
    switch (vocal) {
        case "a":
            return "ai";

        case "e":
            return "enter";

        case "i":
            return "imes";

        case "o":
            return "ober";

        case "u":
            return "ufat";

        default:
            return vocal;
    }
}

//  DESENCRIPTAR

function btnDesencriptar() {

    let texto_encriptado = document.querySelector(".caja-texto").value;
    let textoDesencriptado = desencriptar(texto_encriptado)
    document.querySelector(".sms").value = textoDesencriptado;
    document.getElementById("siu").style.display = "block"
    document.getElementById("noen").style.display = "none"
    return
}


// DESENCRIPTADOR

function desencriptar(texto2) {
    let textoDesencriptado = texto2
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}


// Boton COPIAR

document.getElementById("copy").addEventListener("click", function () {
    var campoDeTexto = document.getElementById("ecsms");
    campoDeTexto.select();
    campoDeTexto.setSelectionRange(0, 99999);
    document.execCommand("copy");
});

function disableBtn() {
    butonEncriptar.setAttribute("disabled", "true");
    butonDesencriptar.setAttribute("disabled", "true");
}

textArea.addEventListener("input", function() {
    if (textArea.value.trim() !== "") {
        butonEncriptar.removeAttribute("disabled");
        butonDesencriptar.removeAttribute("disabled");
    } else {
        disableBtn();
    }
});


textArea.addEventListener('input', function() {
    this.value = this.value
        .toLowerCase() 
        .replace(/[^a-z\s]/g, '');  // 
});