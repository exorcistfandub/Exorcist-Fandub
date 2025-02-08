function filterContent(status) {
    let items = document.querySelectorAll('.tarjeta');

    items.forEach(item => {
        if (status === 'all') {
            item.style.display = 'block';
        } else {
            item.style.display = item.getAttribute('data-status') === status ? 'block' : 'none';
        }
    });
}
