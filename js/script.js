document.addEventListener("DOMContentLoaded", function () {
    cargarCarrusel();
    cargarContenido();
    cargarSeries();
    cargarPeliculas();
});

function cargarCarrusel() {
    const carrusel = document.getElementById("carrusel");
    carrusel.innerHTML = `
        <div class="slide"><img src="assets/images/ejemplo.jpg" alt="Estreno 1"></div>
        <div class="slide"><img src="assets/images/ejemplo2.jpg" alt="Estreno 2"></div>
    `;
}

function cargarContenido() {
    const contenedor = document.getElementById("contenedorContenido");
    const contenido = [
        { titulo: "Contenido Ejemplo 1", imagen: "assets/images/ejemplo.jpg", estado: "emision" },
        { titulo: "Contenido Ejemplo 2", imagen: "assets/images/ejemplo2.jpg", estado: "finalizado" }
    ];
    
    contenedor.innerHTML = contenido.map(item => `
        <div class="tarjeta" data-estado="${item.estado}">
            <img src="${item.imagen}" alt="${item.titulo}">
            <p>${item.titulo}</p>
        </div>
    `).join('');
}

function cargarSeries() {
    const contenedor = document.getElementById("contenedorSeries");
    const series = [
        { titulo: "Serie Ejemplo 1", imagen: "assets/images/ejemplo.jpg", estado: "emision" },
        { titulo: "Serie Ejemplo 2", imagen: "assets/images/ejemplo2.jpg", estado: "finalizado" }
    ];
    
    contenedor.innerHTML = series.map(item => `
        <div class="tarjeta" data-estado="${item.estado}">
            <img src="${item.imagen}" alt="${item.titulo}">
            <p>${item.titulo}</p>
        </div>
    `).join('');
}

function cargarPeliculas() {
    const contenedor = document.getElementById("contenedorPeliculas");
    const peliculas = [
        { titulo: "Película Ejemplo 1", imagen: "assets/images/ejemplo.jpg", estado: "emision" },
        { titulo: "Película Ejemplo 2", imagen: "assets/images/ejemplo2.jpg", estado: "finalizado" }
    ];
    
    contenedor.innerHTML = peliculas.map(item => `
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
