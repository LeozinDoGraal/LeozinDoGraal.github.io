// Scroll suave para o topo
document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Mostrar/Esconder o botão de voltar ao topo conforme o scroll
window.addEventListener("scroll", function() {
    var button = document.getElementById("back-to-top");
    if (window.scrollY > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});
