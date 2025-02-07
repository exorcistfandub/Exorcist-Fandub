const animeList = [
    { title: "Naruto", link: "#" },
    { title: "One Piece", link: "#" },
    { title: "Attack on Titan", link: "#" }
];

const moviesList = [
    { title: "The Matrix", link: "#" },
    { title: "Inception", link: "#" },
    { title: "The Dark Knight", link: "#" }
];

const seriesList = [
    { title: "Stranger Things", link: "#" },
    { title: "Breaking Bad", link: "#" },
    { title: "The Witcher", link: "#" }
];

function fillCategories() {
    const animeUl = document.getElementById('anime-list');
    const moviesUl = document.getElementById('movies-list');
    const seriesUl = document.getElementById('series-list');

    animeList.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.link}">${item.title}</a>`;
        animeUl.appendChild(li);
    });

    moviesList.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.link}">${item.title}</a>`;
        moviesUl.appendChild(li);
    });

    seriesList.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.link}">${item.title}</a>`;
        seriesUl.appendChild(li);
    });
}

window.onload = fillCategories;
