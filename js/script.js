// Aquí puedes agregar funcionalidades interactivas para el panel de administración, como la validación de formularios, etc.
// En este caso, como es un ejemplo, solo lo mantengo para la estructura.

document.querySelector('form').addEventListener('submit', function(event) {
    // Validación simple (aunque el HTML ya tiene validaciones, esto es solo un ejemplo)
    const title = document.getElementById('titulo').value;
    const category = document.getElementById('categoria').value;
    const estado = document.getElementById('estado').value;

    if (!title || !category || !estado) {
        alert("Por favor, llena todos los campos.");
        event.preventDefault();
    }
});
