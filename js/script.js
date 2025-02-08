document.addEventListener("DOMContentLoaded", function () {
    cargarCarrusel();
    cargarContenido();
    cambiarModo();
});

let carruselIndex = 0;

function cargarCarrusel() {
    const carrusel = document.getElementById("carrusel");
    const imagenes = ["assets/images/ejemplo.jpg", "assets/images/ejemplo2.jpg"];
    let contenidoCarrusel = "";
    imagenes.forEach(img => {
        contenidoCarrusel += `<div class="carrusel-item"><img src="${img}" alt="Estreno"></div>`;
    });
    carrusel.innerHTML = contenidoCarrusel;
}

function cambiarCarrusel(direccion) {
    const carruselItems = document.querySelectorAll(".carrusel-item");
    carruselItems[carruselIndex].style.display = "none";
    carruselIndex = (carruselIndex + direccion + carruselItems.length) % carruselItems.length;
    carruselItems[carruselIndex].style.display = "inline-block";
}

function cargarContenido() {
    const contenido = [
        { titulo: "Serie Ejemplo", imagen: "assets/images/ejemplo.jpg", estado: "emision" },
        { titulo: "Dorama Ejemplo", imagen: "assets/images/ejemplo2.jpg", estado: "finalizado" }
    ];

    const contenedor = document.getElementById("contenedorContenido");
    contenedor.innerHTML = contenido.map(item => `
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

function buscarContenido() {
    const query = document.getElementById("buscar").value.toLowerCase();
    const tarjetas = document.querySelectorAll(".tarjeta");
    tarjetas.forEach(tarjeta => {
        const titulo = tarjeta.querySelector("p").textContent.toLowerCase();
        if (titulo.includes(query)) {
            tarjeta.style.display = "block";
        } else {
            tarjeta.style.display = "none";
        }
    });
}

function cambiarModo() {
    const botonModo = document.getElementById("modo-oscuro");
    botonModo.addEventListener("click", () => {
        document.body.classList.toggle("modo-oscuro");
        if (document.body.classList.contains("modo-oscuro")) {
            botonModo.textContent = "Modo Claro";
        } else {
            botonModo.textContent = "Modo Oscuro";
        }
    });
}
