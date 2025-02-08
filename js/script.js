document.addEventListener('DOMContentLoaded', () => {
    const estrenosList = document.getElementById('estrenos-list');
    const contenidoList = document.getElementById('contenido-list');
    const seriesList = document.getElementById('series-list');
    const peliculasList = document.getElementById('peliculas-list');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeModal = document.getElementById('closeModal');
    const addFavorite = document.getElementById('addFavorite');

    // Cargar contenido desde contenido.json
    const loadContent = async () => {
        const response = await fetch('contenido.json');
        const data = await response.json();
        displayContent(data);
    };

    const displayContent = (data) => {
        estrenosList.innerHTML = '';
        contenidoList.innerHTML = '';
        seriesList.innerHTML = '';
        peliculasList.innerHTML = '';

        data.estrenos.forEach(item => {
            const contentItem = createContentItem(item);
            estrenosList.appendChild(contentItem);
        });

        data.contenido.forEach(item => {
            const contentItem = createContentItem(item);
            contenidoList.appendChild(contentItem);
        });

        data.series.forEach(item => {
            const contentItem = createContentItem(item);
            seriesList.appendChild(contentItem);
        });

        data.peliculas.forEach(item => {
            const contentItem = createContentItem(item);
            peliculasList.appendChild(contentItem);
        });
    };

    const createContentItem = (item) => {
        const div = document.createElement('div');
        div.classList.add('content-item');
        div.innerHTML = `
            <img src="${item.imagen}" alt="${item.titulo}">
            <h3>${item.titulo}</h3>
            <p>${item.descripcion}</p>
        `;
        div.addEventListener('click', () => {
            showModal(item);
        });
        return div;
    };

    const showModal = (item) => {
        modalTitle.textContent = item.titulo;
        modalDescription.textContent = item.descripcion;
        modal.style.display = 'flex';
    };

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    addFavorite.addEventListener('click', () => {
        alert('¡Agregado a favoritos!');
    });

    // Funcionalidad de scroll infinito
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            loadContent(); // Cargar más contenido cuando se llegue al final
        }
    });

    loadContent();
});
