document.addEventListener("DOMContentLoaded", function () {
    cargarCarrusel();
    cargarContenido();
    iniciarCarruselAutomatico();
});

function cargarCarrusel() {
    const carrusel = document.getElementById("carrusel");
    carrusel.innerHTML = `
        <div class="slide"><img src="assets/images/ejemplo.jpg" alt="Estreno 1"></div>
        <div class="slide"><img src="assets/images/ejemplo2.jpg" alt="Estreno 2"></div>
    `;
}

function cargarContenido() {
    const contenido = [
        { titulo: "Serie Ejemplo", imagen: "assets/images/ejemplo.jpg", estado: "emision", tipo: "serie" },
        { titulo: "Película Ejemplo", imagen: "assets/images/ejemplo2.jpg", estado: "finalizado", tipo: "pelicula" },
        { titulo: "Dorama Ejemplo", imagen: "assets/images/ejemplo3.jpg", estado: "finalizado", tipo: "serie" }
    ];

    // Cargar contenido general
    const contenedorContenido = document.getElementById("contenedorContenido");
    contenedorContenido.innerHTML = contenido.map(item => `
        <div class="tarjeta" data-estado="${item.estado}">
            <img src="${item.imagen}" alt="${item.titulo}">
            <p>${item.titulo}</p>
        </div>
    `).join('');

    // Cargar solo series
    const contenedorSeries = document.getElementById("contenedorSeries");
    const series = contenido.filter(item => item.tipo === "serie");
    contenedorSeries.innerHTML = series.map(item => `
        <div class="tarjeta" data-estado="${item.estado}">
            <img src="${item.imagen}" alt="${item.titulo}">
            <p>${item.titulo}</p>
        </div>
    `).join('');

    // Cargar solo películas
    const contenedorPeliculas = document.getElementById("contenedorPeliculas");
    const peliculas = contenido.filter(item => item.tipo === "pelicula");
    contenedorPeliculas.innerHTML = peliculas.map(item => `
        <div class="tarjeta" data-estado="${item.estado}">
            <img src="${item.imagen}" alt="${item.titulo}">
            <p>${item.titulo}</p>
        </div>
    `).join('');
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

function iniciarCarruselAutomatico() {
    let index = 0;
    const slides = document.querySelectorAll(".carrusel .slide");
    setInterval(() => {
        index = (index + 1) % slides.length;
        const offset = -index * 100;
        document.querySelector(".carrusel").style.transform = `translateX(${offset}%)`;
    }, 3000);
}
