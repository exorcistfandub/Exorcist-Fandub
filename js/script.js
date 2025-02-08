// Función para filtrar contenido según la categoría seleccionada
function filterContent(category) {
    const allItems = document.querySelectorAll('.content-item');
    
    allItems.forEach(item => {
        // Si la categoría del item coincide con la seleccionada, mostrarlo, sino ocultarlo
        if (item.classList.contains(category)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Opcional: Mostrar todo el contenido al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    filterContent('series');  // Cambia a 'doramas' o 'peliculas' si quieres ver otro grupo por defecto
});
