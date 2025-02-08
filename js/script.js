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

    // Agregar la lógica para almacenar los datos en el servidor o base de datos aquí.

    // Limpiar el formulario
    document.getElementById("form-agregar-contenido").reset();
});

// Ejemplo de manejo de comentarios
const comentarios = [];

function agregarComentario(contenidoID, texto) {
    const comentario = {
        contenidoID,
        texto,
        fecha: new Date().toLocaleString()
    };
    comentarios.push(comentario);
    console.log("Comentario agregado:", comentario);
}

// Ejemplo de valoración
const valoraciones = [];

function agregarValoracion(contenidoID, puntuacion) {
    const valoracion = {
        contenidoID,
        puntuacion,
        fecha: new Date().toLocaleString()
    };
    valoraciones.push(valoracion);
    console.log("Valoración agregada:", valoracion);
}
