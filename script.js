function verificarCodigo() {
    var codigo = document.getElementById("codigo").value.toUpperCase();

    if (codigo === "CASO-1") {
        window.location.href = "desktop.html";
    }
    else if (codigo === "CASO-2") {
        window.location.href = "desktop.html";
    }
    else if (codigo === "CASO-3") {
        window.location.href = "desktop.html";
    }
    else {
        document.getElementById("mensagem").innerText = "CÓDIGO INVÁLIDO";
    }
}
