document.getElementById("form-agregar-contenido").addEventListener("submit", function(event) {
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const tipo = document.getElementById("tipo").value;
    const estado = document.getElementById("estado").value;
    const imagen = document.getElementById("imagen").files[0]; // Obtener el archivo seleccionado

    if (imagen) {
        // Usamos un FileReader para cargar la imagen y obtener su URL
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageUrl = e.target.result;
            console.log("Imagen cargada correctamente:", imageUrl);

            // Crear el objeto con los datos del contenido
            const nuevoContenido = {
                titulo,
                tipo,
                estado,
                imagen: imageUrl // Aquí se guarda la URL de la imagen cargada
            };

            // Guardar o mostrar el contenido, por ejemplo, en la galería
            mostrarContenidoEnGaleria(nuevoContenido);

            // Limpiar el formulario
            document.getElementById("form-agregar-contenido").reset();
        };
        reader.readAsDataURL(imagen); // Lee la imagen como URL
    } else {
        console.log("No se ha seleccionado ninguna imagen.");
    }
});

// Función para mostrar el nuevo contenido en la galería
function mostrarContenidoEnGaleria(contenido) {
    const galeria = document.getElementById("galeria");

    const divContenido = document.createElement("div");
    divContenido.classList.add("contenido-item");

    const img = document.createElement("img");
    img.src = contenido.imagen; // La URL de la imagen cargada
    img.alt = contenido.titulo;

    const estado = document.createElement("div");
    estado.classList.add("estado");
    estado.textContent = contenido.estado === "emision" ? "En emisión" : "Finalizado";
    estado.style.backgroundColor = contenido.estado === "emision" ? "green" : "red";

    divContenido.appendChild(img);
    divContenido.appendChild(estado);
    galeria.appendChild(divContenido);
}
