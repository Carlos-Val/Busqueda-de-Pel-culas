//funciones
let valor = document.getElementById("buscador");
let valor1 = document.getElementById("buscador1");


//Recursos API

let key = "c0b6dea31a9d647a6b7d1eafa59bacaa";

let recurso = "search";
let recurso1 = "";

let criterio = "movie";

let base_url = `https://api.themoviedb.org/3/${recurso}`;
let base_url1 = `https://api.themoviedb.org/3${recurso1}`;

const call = async(url) => {
    let res = await axios.get(url);

    if (res.data.results) {
        return res.data.results;
    };

    if (res.data.title) {
        return res.data
    };
}

const pintar = async(coleccionPintar) => {
    //Proceso para el pintado HTML de las películas
    const divPelisDomElement = document.getElementById("contenedor");

    divPelisDomElement.innerHTML = "";

    if (Array.isArray(coleccionPintar)) {
        coleccionPintar.map((pelicula) => {
            divPelisDomElement.innerHTML += `<div id='peliculas'>
            <img src='https://image.tmdb.org/t/p/w500${pelicula.poster_path}'></img></div>
            <div id='textos'><h2>${pelicula.title}</h2>
            <h3>NOTA: ${pelicula.vote_average}</h3>
            </div>`
        });
    }
    if (coleccionPintar.original_title) {
        divPelisDomElement.innerHTML += `<div class='peliculas'>
        <img src='https://image.tmdb.org/t/p/w500${coleccionPintar.poster_path}' width='200px' class='picture'>
        </img></div><div class='infoPelis'><h2>${coleccionPintar.original_title}</h2><h3>NOTA: ${coleccionPintar.vote_average}</h3></div>`
    }
    return;
}






const buscador = async() => {
    let query = valor.value;

    //Construccion de la URL 
    let url = `${base_url}/${criterio}?api_key=${key}&query=${query}`;
    let pelis = await call(url);


    pintar(pelis);



};
const buscador1 = async() => {
    let query = valor1.value;

    //Construccion de la URL 
    let url = `${base_url1}/${criterio}/${query}?api_key=${key}&language=es-ES`;

    let pelis = await call(url);


    pintar(pelis);



};