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

    // Mostrar la portada en la sección de portadas
    const portadasContainer = document.querySelector(".portadas-container");
    const nuevaPortada = document.createElement("img");
    nuevaPortada.src = imagen;
    nuevaPortada.alt = titulo;
    portadasContainer.appendChild(nuevaPortada);

    // Limpiar el formulario
    document.getElementById("form-agregar-contenido").reset();
});
