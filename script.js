document.getElementById("saibaMais").addEventListener("click", () => {
    document.getElementById("sobre").scrollIntoView({
        behavior: "smooth"
    });
});

const mensagens = [
    "🌱 Cada árvore plantada hoje garante um futuro melhor amanhã.",
    "🚜 A tecnologia fortalece a agricultura sustentável.",
    "🌎 Campo e cidade juntos constroem um mundo mais equilibrado.",
    "💚 Pequenas ações geram grandes transformações ambientais.",
    "☀️ O conhecimento é a semente para um futuro sustentável."
];

document.getElementById("gerarMensagem").addEventListener("click", () => {
    const aleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    document.getElementById("mensagem").textContent = aleatoria;
});