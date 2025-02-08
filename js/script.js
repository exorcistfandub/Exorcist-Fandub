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

    console.log("Contenido agregado:", nuevoContenido);

    // Limpiar el formulario
    document.getElementById("form-agregar-contenido").reset();
});
