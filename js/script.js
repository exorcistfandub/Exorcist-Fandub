document.getElementById("form-agregar-contenido").addEventListener("submit", function(event) {
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const tipo = document.getElementById("tipo").value;
    const estado = document.getElementById("estado").value;
    const imagen = document.getElementById("imagen").value;
    const categorias = document.getElementById("categorias").value.split(',').map(cat => cat.trim());
    const capitulos = document.getElementById("capitulos").value.split(',').map(cap => cap.trim());

    const nuevoContenido = {
        titulo,
        tipo,
        estado,
        imagen,
        categorias,
        capitulos
    };

    // Guardamos el nuevo contenido en localStorage
    let contenidos = JSON.parse(localStorage.getItem("contenidos")) || [];
    contenidos.push(nuevoContenido);
    localStorage.setItem("contenidos", JSON.stringify(contenidos));

    mostrarPortadas();  // Actualizamos la visualización de las portadas

    // Limpiar el formulario
    document.getElementById("form-agregar-contenido").reset();
});

// Función para mostrar las portadas y manejar clics
function mostrarPortadas() {
    let contenidos = JSON.parse(localStorage.getItem("contenidos")) || [];
    const contenedorPortadas = document.querySelector(".portadas-container");
    contenedorPortadas.innerHTML = ""; // Limpiar las portadas previas

    contenidos.forEach(contenido => {
        const div = document.createElement("div");
        div.classList.add("portada-item");
        div.innerHTML = `
            <img src="${contenido.imagen}" alt="${contenido.titulo}" class="portada-img">
            <div class="info-portada">
                <h3>${contenido.titulo}</h3>
                <p>${contenido.tipo}</p>
                <div class="estado-portada">
                    <span class="${contenido.estado === 'emision' ? 'bolita-verde' : 'bolita-roja'}"></span>
                    ${contenido.estado === 'emision' ? 'En emisión' : 'Finalizado'}
                </div>
                <button onclick="verContenido('${contenido.titulo}')">Ver Detalles</button>
            </div>
        `;
        contenedorPortadas.appendChild(div);
    });
}

// Función para ver detalles del contenido (desplegar capítulos si es serie/dorama)
function verContenido(titulo) {
    let contenidos = JSON.parse(localStorage.getItem("contenidos")) || [];
    let contenido = contenidos.find(c => c.titulo === titulo);
    
    if (contenido) {
        let detalles = `
            <h2>${contenido.titulo}</h2>
            <img src="${contenido.imagen}" alt="${contenido.titulo}" class="imagen-detalle">
            <p><strong>Tipo:</strong> ${contenido.tipo}</p>
            <p><strong>Estado:</strong> ${contenido.estado === 'emision' ? 'En emisión' : 'Finalizado'}</p>
            <p><strong>Categorías:</strong> ${contenido.categorias.join(', ')}</p>
        `;
        
        if (contenido.capitulos.length > 0) {
            detalles += `<h3>Capítulos:</h3><ul>`;
            contenido.capitulos.forEach(cap => {
                detalles += `<li><a href="#">Capítulo ${cap}</a></li>`;
            });
            detalles += `</ul>`;
        }
        
        document.querySelector(".portadas-container").innerHTML = detalles;
    }
}

// Llamada para mostrar las portadas al cargar la página
mostrarPortadas();
