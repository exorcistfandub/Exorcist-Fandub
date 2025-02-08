document.getElementById("form-agregar-contenido").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los datos del formulario
    const titulo = document.getElementById("titulo").value;
    const tipo = document.getElementById("tipo").value;
    const estado = document.getElementById("estado").value;
    const imagen = document.getElementById("imagen").value;

    // Crear un objeto con el nuevo contenido
    const nuevoContenido = {
        titulo,
        tipo,
        estado,
        imagen
    };

    // Aquí puedes guardar el contenido en un archivo JSON, una base de datos, o simplemente imprimirlo en la consola
    console.log("Contenido agregado:", nuevoContenido);

    // Mostrar el contenido en la página principal
    mostrarContenido(nuevoContenido);

    // Limpiar el formulario
    document.getElementById("form-agregar-contenido").reset();
});

// Función para mostrar el contenido en la página principal
function mostrarContenido(nuevoContenido) {
    const listaContenidos = document.getElementById("contenidos-lista");

    const nuevoElemento = document.createElement("div");
    nuevoElemento.classList.add("contenido");

    nuevoElemento.innerHTML = `
        <img src="${nuevoContenido.imagen}" alt="${nuevoContenido.titulo}" />
        <h3>${nuevoContenido.titulo}</h3>
        <p>Tipo: ${nuevoContenido.tipo}</p>
        <p>Estado: <span class="${nuevoContenido.estado}">${nuevoContenido.estado === 'emision' ? 'En emisión' : 'Finalizado'}</span></p>
    `;

    listaContenidos.appendChild(nuevoElemento);
}
