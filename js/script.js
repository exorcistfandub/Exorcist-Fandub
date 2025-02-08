document.addEventListener("DOMContentLoaded", function () {
    cargarCarrusel();
    cargarContenido();
    agregarEventos();
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
        { titulo: "Película Ejemplo", imagen: "assets/images/ejemplo2.jpg", estado: "finalizado", tipo: "pelicula" }
    ];

    contenido.forEach(item => {
        const tarjetaHTML = `
            <div class="tarjeta" data-estado="${item.estado}" data-tipo="${item.tipo}">
                <img src="${item.imagen}" alt="${item.titulo}">
                <p>${item.titulo}</p>
                <button class="favorito">❤️</button>
            </div>
        `;
        if (item.tipo === "serie") {
            contenedorSeries.innerHTML += tarjetaHTML;
        } else {
            contenedorPeliculas.innerHTML += tarjetaHTML;
        }
    });
}

function agregarEventos() {
    const botonesFavorito = document.querySelectorAll(".favorito");
    botonesFavorito.forEach(boton => {
        boton.addEventListener("click", function () {
            boton.classList.toggle("favorito-activado");
            boton.textContent = boton.classList.contains("favorito-activado") ? "❤️" : "🤍";
        });
    });

    const tarjetas = document.querySelectorAll(".tarjeta");
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener("click", function () {
            const modal = document.createElement("div");
            modal.classList.add("modal", "open");
            modal.innerHTML = `
                <div class="modal-content">
                    <button class="modal-close">X</button>
                    <h2>${tarjeta.querySelector("p").textContent}</h2>
                    <p>Detalles de la serie o película...</p>
                </div>
            `;
            document.body.appendChild(modal);
            modal.querySelector(".modal-close").addEventListener("click", () => {
                modal.classList.remove("open");
                document.body.removeChild(modal);
            });
        });
    });
}

