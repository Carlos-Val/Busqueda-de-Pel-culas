//funciones
let valor = document.getElementById("buscador");
let valor1 = document.getElementById("buscador1");


//Recursos API

let key = "c0b6dea31a9d647a6b7d1eafa59bacaa";

let recurso = "search";
let recurso1 = "";

let criterio = "movie";

let base_url = `http://api.themoviedb.org/3/${recurso}`;
let base_url1 = `http://api.themoviedb.org/3${recurso1}`;

const call = async(url) => {
    let res = await axios.get(url);

    if (!res.data.results) {
        error = new Error("La url era incorrecta");
        return error;
    }

    return res.data.results;
}

const pintar = async(coleccionPintar) => {
    //Proceso para el pintado HTML de las películas
    const divPelisDomElement = document.getElementById("contenedor");

    coleccionPintar.map((pelicula) => {

        const newPeliDomElement = document.createElement("div");
        newPeliDomElement.innerHTML = pelicula.title;
        divPelisDomElement.appendChild(newPeliDomElement);

        const newImaDomElement = document.createElement("img");
        newImaDomElement.setAttribute('src', 'https://image.tmdb.org/t/p/w500' + pelicula.poster_path);
        divPelisDomElement.appendChild(newImaDomElement);
    });

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
    let url = `${base_url1}/${criterio}/${query}?api_key=${key}&language=en-US`;

    let pelis = await call(url);


    pintar(pelis);



};