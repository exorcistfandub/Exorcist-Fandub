document.getElementById("form-agregar-contenido").addEventListener("submit", function(event) {
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const tipo = document.getElementById("tipo").value;
    const estado = document.getElementById("estado").value;
    const imagen = document.getElementById("imagen").files[0];

    if (imagen) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const nuevoContenido = {
                titulo,
                tipo,
                estado,
                imagen: e.target.result
            };

            // Mostrar el nuevo contenido en la página
            const contentGrid = document.querySelector('.content-grid');
            const nuevoItem = document.createElement('div');
            nuevoItem.classList.add('item');
            nuevoItem.innerHTML = `
                <img src="${nuevoContenido.imagen}" alt="${nuevoContenido.titulo}">
                <h3>${nuevoContenido.titulo}</h3>
                <p>Estado: <span class="state ${nuevoContenido.estado === 'emision' ? 'green' : 'red'}">${nuevoContenido.estado === 'emision' ? 'En Emisión' : 'Finalizado'}</span></p>
                <button class="view-button">Ver Más</button>
            `;
            contentGrid.appendChild(nuevoItem);
        };
        reader.readAsDataURL(imagen);
    }

    // Limpiar el formulario
    document.getElementById("form-agregar-contenido").reset();
});
