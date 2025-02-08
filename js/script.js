// Obtener elementos del DOM
const searchInput = document.getElementById('search');
const resultsContainer = document.getElementById('search-results');
const contentSection = document.getElementById('content');
const modal = document.getElementById('content-modal');
const closeModal = document.getElementById('close-modal');

// Función para mostrar resultados de búsqueda
searchInput.addEventListener('input', async (e) => {
    const query = e.target.value;
    if (query.length > 2) {
        const response = await fetch(`/buscar?query=${query}`);
        const data = await response.json();
        displaySearchResults(data);
    } else {
        resultsContainer.innerHTML = '';
    }
});

function displaySearchResults(data) {
    resultsContainer.innerHTML = data.map(item => `
        <div class="result-item" onclick="showDetails(${item.id})">
            <img src="${item.image}" alt="${item.title}">
            <h4>${item.title}</h4>
        </div>
    `).join('');
}

// Mostrar detalles del contenido en un modal
function showDetails(id) {
    const content = contentData.find(item => item.id === id);
    document.getElementById('content-description').textContent = content.description;
    modal.style.display = 'flex';
}

// Cerrar el modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Función para cargar contenido de manera infinita (scroll infinito)
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadMoreContent();
    }
});

async function loadMoreContent() {
    const response = await fetch('/getMoreContent');
    const newContent = await response.json();
    newContent.forEach(item => {
        contentSection.innerHTML += `
            <div class="content-item">
                <img src="${item.image}" alt="${item.title}">
                <div class="content-info">
                    <h3>${item.title}</h3>
                    <button class="favorite-btn">❤️</button>
                </div>
            </div>
        `;
    });
}
