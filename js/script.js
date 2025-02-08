function filterContent(status) {
    let items = document.querySelectorAll('.content-item');

    items.forEach(item => {
        if (status === 'all') {
            item.style.display = 'block';
        } else {
            item.style.display = item.getAttribute('data-status') === status ? 'block' : 'none';
        }
    });
}
