// Cambiar entre modo claro y oscuro
const toggleDarkModeButton = document.getElementById('toggle-darkmode');
let darkMode = false;

toggleDarkModeButton.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.style.background = darkMode ? 'linear-gradient(to bottom, #1e1e1e, #3a3a3a)' : 'linear-gradient(to bottom, #000428, #004e92)';
    document.body.style.color = darkMode ? 'white' : 'black';
});

// Filtrar contenido por búsqueda
const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();
    const items = document.querySelectorAll('.tarjeta');

    items.forEach(item => {
        const title = item.querySelector('p').textContent.toLowerCase();
        item.style.display = title.includes(filter) ? 'block' : 'none';
    });
});

// Marcar contenido como favorito y almacenarlo en localStorage
const favButtons = document.querySelectorAll('.fav-btn');

favButtons.forEach(button => {
    button.addEventListener('click', () => {
        const currentItem = button.parentElement;
        const itemTitle = currentItem.querySelector('p').textContent;

        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!favorites.includes(itemTitle)) {
            favorites.push(itemTitle);
        } else {
            favorites = favorites.filter(fav => fav !== itemTitle);
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
    });
});
