// Manejar la adición de nuevo contenido
document.getElementById("form-agregar-contenido").addEventListener("submit", function(event) {
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const tipo = document.getElementById("tipo").value;
    const estado = document.getElementById("estado").value;
    const imagen = document.getElementById("imagen").value;

    const nuevoContenido = {
        titulo,
        tipo,
        estado,
        imagen
    };

    // Crear el nuevo item y agregarlo al DOM
    const contentList = document.getElementById('contentList');
    const nuevoItem = document.createElement('div');
    nuevoItem.classList.add('content-item');
    nuevoItem.setAttribute('data-status', estado);  // Agregar el estado para el filtrado

    nuevoItem.innerHTML = `
        <img src="${imagen}" alt="${titulo}" class="content-image">
        <p><strong>${titulo}</strong></p>
        <p>${tipo}</p>
        <p><em>Estado: ${estado}</em></p>
    `;

    contentList.appendChild(nuevoItem);

    // Limpiar el formulario
    document.getElementById("form-agregar-contenido").reset();
    console.log("Contenido agregado:", nuevoContenido);
});

// Función para filtrar el contenido por estado
document.getElementById("filterButton").addEventListener("click", function() {
    const estadoSeleccionado = document.querySelector('input[name="status"]:checked').value;
    filterContent(estadoSeleccionado);
});

// Función para mostrar/ocultar contenido según el estado
function filterContent(estado) {
    let items = document.querySelectorAll('.content-item');
    items.forEach(item => {
        if (estado === 'all') {
            item.style.display = 'block';
        } else {
            item.style.display = item.getAttribute('data-status') === estado ? 'block' : 'none';
        }
    });
}
