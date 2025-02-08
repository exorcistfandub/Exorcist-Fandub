// Función para manejar el formulario de agregar contenido
document.getElementById('add-content-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Recoger los datos del formulario
    const contentType = document.getElementById('content-type').value;
    const contentTitle = document.getElementById('content-title').value;
    const contentStatus = document.getElementById('content-status').value;
    const contentImage = document.getElementById('content-image').value;

    // Crear un objeto con los datos
    const newContent = {
        type: contentType,
        title: contentTitle,
        status: contentStatus,
        image: contentImage
    };

    // Obtener los contenidos guardados en localStorage
    let contents = JSON.parse(localStorage.getItem('contents')) || [];

    // Añadir el nuevo contenido
    contents.push(newContent);

    // Guardar los contenidos en localStorage
    localStorage.setItem('contents', JSON.stringify(contents));

    // Mostrar un mensaje de éxito
    alert('Contenido agregado correctamente');

    // Limpiar el formulario
    document.getElementById('add-content-form').reset();
});

// Cargar el contenido de localStorage y mostrarlo
window.addEventListener('DOMContentLoaded', function() {
    const contentList = document.getElementById('content-list');
    const contents = JSON.parse(localStorage.getItem('contents')) || [];

    contents.forEach(content => {
        const contentElement = document.createElement('div');
        contentElement.classList.add('tarjeta');
        contentElement.setAttribute('data-status', content.status);

        contentElement.innerHTML = `
            <img src="${content.image}" alt="${content.title}">
            <p>${content.title}</p>
        `;

        contentList.appendChild(contentElement);
    });
});
