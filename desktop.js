function abrir(tipo) {
    var janela = document.getElementById("janela");
    var conteudo = document.getElementById("conteudo");

    if (tipo === "arquivos") {
        conteudo.innerHTML = `
      <p>📁 PASTA: CASO 01</p>
      <p>- foto_cena.jpg</p>
      <p>- anotacoes.txt</p>
      <p>- audio_13-09.mp3</p>
    `;
    }

    if (tipo === "emails") {
        conteudo.innerHTML = `
      <p>📧 E-MAIL INTERNO</p>
      <p><b>De:</b> diretor@agencia.gov</p>
      <p><b>Assunto:</b> Acesso restrito</p>
      <p>O código correto não está completo.</p>
      <p>Verifique o relatório.</p>
    `;
    }

    if (tipo === "relatorio") {
        conteudo.innerHTML = `
      <p>📄 RELATÓRIO CONFIDENCIAL</p>
      <p>Data: 13/09</p>
      <p>Caso iniciado às 09:17</p>
      <p>Código parcial: CASO-</p>
    `;
    }

    janela.style.display = "block";
}

function fechar() {
    document.getElementById("janela").style.display = "none";
}
