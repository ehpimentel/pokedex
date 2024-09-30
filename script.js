var img = document.getElementById("img_altered");

img.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Verifica se o modo escuro está ativado e muda a imagem
    if (document.body.classList.contains("dark")) {
        img.src = "./imagem/Solrock.webp";
    } else {
        img.src = "./imagem/Lunatone";
    }
});