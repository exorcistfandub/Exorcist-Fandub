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

    let index = 0;
    const slides = carrusel.querySelectorAll(".slide");
    setInterval(() => {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        index = (index + 1) % slides.length;
    }, 3000);  // Cambiar cada 3 segundos
}

function cargarContenido() {
    const contenedor = document.getElementById("contenedorSeries");
    const contenido = [
        { titulo: "Serie Ejemplo", imagen: "assets/images/ejemplo.jpg", estado: "emision" },
        { titulo: "Dorama Ejemplo", imagen: "assets/images/ejemplo2.jpg", estado: "finalizado" }
    ];
    
    contenedor.innerHTML = contenido.map(item => `
        <div class="tarjeta" data-estado="${item.estado}">
            <img src="${item.imagen}" alt="${item.titulo}">
            <p>${item.titulo}</p>
        </div>
    `).join('');
}

function filtrarEstado(estado) {
    const tarjetas = document.querySelectorAll(".tarjeta");
    const botones = document.querySelectorAll(".filtros button");
    
    // Desactivar todos los botones
    botones.forEach(boton => boton.classList.remove('activo'));
    
    // Activar el botón correspondiente
    const botonActivo = document.querySelector(`.filtros button[data-estado="${estado}"]`);
    if (botonActivo) botonActivo.classList.add('activo');
    
    tarjetas.forEach(tarjeta => {
        if (estado === "todos" || tarjeta.getAttribute("data-estado") === estado) {
            tarjeta.style.display = "block";
        } else {
            tarjeta.style.display = "none";
        }
    });
}

// Panel de administración
document.getElementById("form-agregar-contenido").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const titulo = document.getElementById("titulo").value;
    const tipo = document.getElementById("tipo").value;
    const estado = document.getElementById("estado").value;
    const imagen = document.getElementById("imagen").value;

    const nuevoContenido = { titulo, tipo, estado, imagen };
    agregarContenido(nuevoContenido);
});

function agregarContenido(contenido) {
    // Aquí se podría guardar el contenido en localStorage o un arreglo para simular
    console.log("Contenido agregado:", contenido);
    // Simula que se actualiza el contenido en el sitio
    cargarContenido();
}
