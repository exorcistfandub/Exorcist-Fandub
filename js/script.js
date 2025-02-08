document.addEventListener("DOMContentLoaded", function () {
    cargarCarrusel();
    cargarContenido();
});

// Cargar el carrusel
function cargarCarrusel() {
    const carrusel = document.getElementById("carrusel");
    carrusel.innerHTML = `
        <div class="slide"><img src="assets/images/ejemplo.jpg" alt="Estreno 1"></div>
        <div class="slide"><img src="assets/images/ejemplo2.jpg" alt="Estreno 2"></div>
    `;
}

// Cargar contenido desde contenido.json
function cargarContenido() {
    fetch('contenido.json')
        .then(response => response.json())
        .then(data => {
            const contenedorSeries = document.getElementById("contenedorSeries");
            const contenedorPeliculas = document.getElementById("contenedorPeliculas");
            const contenedorContenido = document.getElementById("contenedorContenido");

            // Filtrar y cargar las series
            const series = data.filter(item => item.tipo === "serie");
            contenedorSeries.innerHTML = series.map(item => `
                <div class="tarjeta" data-estado="${item.estado}">
                    <img src="${item.imagen}" alt="${item.titulo}">
                    <p>${item.titulo}</p>
                </div>
            `).join('');

            // Filtrar y cargar las películas
            const peliculas = data.filter(item => item.tipo === "pelicula");
            contenedorPeliculas.innerHTML = peliculas.map(item => `
                <div class="tarjeta" data-estado="${item.estado}">
                    <img src="${item.imagen}" alt="${item.titulo}">
                    <p>${item.titulo}</p>
                </div>
            `).join('');

            // Cargar todo el contenido
            contenedorContenido.innerHTML = data.map(item => `
                <div class="tarjeta" data-estado="${item.estado}">
                    <img src="${item.imagen}" alt="${item.titulo}">
                    <p>${item.titulo}</p>
                </div>
            `).join('');
        })
        .catch(error => console.error("Error al cargar el contenido:", error));
}

// Filtrar por estado
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
