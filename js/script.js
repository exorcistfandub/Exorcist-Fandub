document.addEventListener("DOMContentLoaded", function () {
    cargarCarrusel();
    cargarContenido();
    configurarBusqueda();
});

function cargarCarrusel() {
    const carrusel = document.getElementById("carrusel");
    const imagenes = [
        "assets/images/ejemplo.jpg",
        "assets/images/ejemplo2.jpg"
    ];
    carrusel.innerHTML = imagenes.map(img => `
        <div class="slide">
            <img src="${img}" alt="Estreno" loading="lazy">
        </div>
    `).join('');
    
    let index = 0;
    setInterval(() => {
        const slides = carrusel.querySelectorAll('.slide');
        slides.forEach(slide => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
        index = (index + 1) % slides.length;
    }, 3000); // Cambiar cada 3 segundos
}

function cargarContenido() {
    const contenedor = document.getElementById("contenedorSeries");
    const contenido = [
        { titulo: "Serie Ejemplo", imagen: "assets/images/ejemplo.jpg", estado: "emision", genero: "accion" },
        { titulo: "Película Ejemplo", imagen: "assets/images/ejemplo2.jpg", estado: "finalizado", genero: "comedia" }
    ];
    
    contenedor.innerHTML = contenido.map(item => `
        <div class="tarjeta" data-estado="${item.estado}" data-genero="${item.genero}">
            <img src="${item.imagen}" alt="${item.titulo}" loading="lazy">
            <p>${item.titulo}</p>
            <button class="favorito" onclick="marcarFavorito(this)">⭐ Favorito</button>
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

function filtrarGenero(genero) {
    const tarjetas = document.querySelectorAll(".tarjeta");
    tarjetas.forEach(tarjeta => {
        if (tarjeta.getAttribute("data-genero") === genero) {
            tarjeta.style.display = "block";
        } else {
            tarjeta.style.display = "none";
        }
    });
}

function configurarBusqueda() {
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("input", function() {
        const term = searchBar.value.toLowerCase();
        const tarjetas = document.querySelectorAll(".tarjeta");
        tarjetas.forEach(tarjeta => {
            const titulo = tarjeta.querySelector("p").textContent.toLowerCase();
            if (titulo.includes(term)) {
                tarjeta.style.display = "block";
            } else {
                tarjeta.style.display = "none";
            }
        });
    });
}

function marcarFavorito(button) {
    button.classList.toggle("favorito-marcar");
    if (button.classList.contains("favorito-marcar")) {
        button.textContent = "🌟 Favorito agregado";
    } else {
        button.textContent = "⭐ Favorito";
    }
}
