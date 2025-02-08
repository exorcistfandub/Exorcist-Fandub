document.addEventListener("DOMContentLoaded", function() {
    const contenidos = [];

    // Aquí agregamos contenido dinámicamente para mostrar en la página principal
    function mostrarContenido() {
        const carousel = document.querySelector('.carousel');
        carousel.innerHTML = ''; // Limpiar contenido existente

        contenidos.forEach(contenido => {
            const img = document.createElement('img');
            img.src = contenido.imagen;
            img.alt = contenido.titulo;
            img.addEventListener('click', () => {
                alert('Mostrando detalle del contenido: ' + contenido.titulo);
                // Aquí deberías mostrar los detalles del contenido
            });
            carousel.appendChild(img);
        });
    }

    // Lógica para agregar nuevo contenido
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
                    imagen: e.target.result // Guardamos la URL de la imagen cargada
                };
                contenidos.push(nuevoContenido);
                mostrarContenido();
            };
            reader.readAsDataURL(imagen);
        }
    });
});
