// Lógica para agregar contenido dinámicamente
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

            // Mostrar nuevo contenido en la página
            const contenidoDiv = document.createElement('div');
            contenidoDiv.classList.add('contenido');
            
            const imagenElement = document.createElement('img');
            imagenElement.src = nuevoContenido.imagen;
            contenidoDiv.appendChild(imagenElement);

            const tituloElement = document.createElement('p');
            tituloElement.classList.add('titulo');
            tituloElement.textContent = nuevoContenido.titulo;
            contenidoDiv.appendChild(tituloElement);

            const estadoElement = document.createElement('p');
            estadoElement.classList.add('estado');
            estadoElement.classList.add(nuevoContenido.estado === 'emision' ? 'estado-emision' : 'estado-finalizado');
            estadoElement.textContent = nuevoContenido.estado === 'emision' ? 'En emisión' : 'Finalizado';
            contenidoDiv.appendChild(estadoElement);

            document.getElementById('contenidos').appendChild(contenidoDiv);

            // Limpiar el formulario
            document.getElementById("form-agregar-contenido").reset();
        };
        reader.readAsDataURL(imagen);
    }
});
