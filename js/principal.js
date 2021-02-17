let principal = axios.get('http://api.themoviedb.org/3/movie/popular?api_key=c0b6dea31a9d647a6b7d1eafa59bacaa');

let loquesea = principal.then((res) => res.data.results);

resultsPromise = principal.then((res) => res.results)

const pintarPeliculas = (moviesColletion) => {

    const divPelis = document.getElementById("contenedor");

    moviesColletion.map((peliculas) => {
        let urlImagen = 'https://image.tmdb.org/t/p/w500';
        const pelisGeneral = document.createElement("div");
        const newImage = document.createElement("img");
        const newTitle = document.createElement("h4");

        divPelis.appendChild(pelisGeneral);
        pelisGeneral.appendChild(newTitle);
        pelisGeneral.appendChild(newImage);

        pelisGeneral.setAttribute("class", "general");
        newTitle.innerHTML = peliculas.title;
        newImage.setAttribute("src", urlImagen + peliculas.poster_path);


    });

}

loquesea.then(pintarPeliculas);