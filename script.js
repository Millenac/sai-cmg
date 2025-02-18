function fuja() {
    var botaoNao = document.getElementById("nao");

    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var larguraBotao = botaoNao.offsetWidth;
    var alturaBotao = botaoNao.offsetHeight;

    // Definindo os limites para que o botão não saia da tela
    var maxX = larguraJanela - larguraBotao - 20; // -20 para evitar encostar na borda
    var maxY = alturaJanela - alturaBotao - 20;

    // Evita valores negativos
    var aleatorioX = Math.max(10, Math.floor(Math.random() * maxX));
    var aleatorioY = Math.max(10, Math.floor(Math.random() * maxY));

    botaoNao.style.position = "absolute";
    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";
}

/* Para mobile, detecta toque e move o botão */
document.getElementById("nao").addEventListener("touchstart", function() {
    fuja();
});
