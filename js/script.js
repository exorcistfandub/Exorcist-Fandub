document.addEventListener("DOMContentLoaded", function () {
    cargarCarrusel();
    cargarContenido();
});

function cargarCarrusel() {
    const carrusel = document.getElementById("carrusel");
    carrusel.innerHTML = `
        <div class="slide"><img src="assets/images/ejemplo.jpg" alt="Estreno 1"></div>
        <div class="slide"><img src="assets/images/ejemplo2.jpg" alt="Estreno 2"></div>
    `;
}

function cargarContenido() {
    const contenedorSeries = document.getElementById("contenedorSeries");
    const contenedorPeliculas = document.getElementById("contenedorPeliculas");

    const contenido = [
        { titulo: "Serie Ejemplo", imagen: "assets/images/ejemplo.jpg", estado: "emision", tipo: "serie" },
        { titulo: "Dorama Ejemplo", imagen: "assets/images/ejemplo2.jpg", estado: "finalizado", tipo: "serie" },
        { titulo: "Película Ejemplo", imagen: "assets/images/ejemplo3.jpg", estado: "finalizado", tipo: "pelicula" }
    ];

    contenido.forEach(item => {
        const tarjeta = `
            <div class="tarjeta" data-estado="${item.estado}">
                <img src="${item.imagen}" alt="${item.titulo}">
                <p>${item.titulo}</p>
            </div>
        `;
        if (item.tipo === "serie") {
            contenedorSeries.innerHTML += tarjeta;
        } else if (item.tipo === "pelicula") {
            contenedorPeliculas.innerHTML += tarjeta;
        }
    });
}

function filtrarEstado(estado) {
    const tarjetas = document.querySelectorAll(".tarjeta");
    tarjetas.forEach(tarjeta => {
        if (estado === "todos" || tarjeta.getAttribute("data-estado") === estado) {
            tarjeta.style.display = "block";
        } else {
            tarjeta.style.display = "none";
        }
    });
}
