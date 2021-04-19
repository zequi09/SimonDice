const URL_API = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id/";
const FILMS_URL = "films/:id/";
const LUKE_URL = `${URL_API}${PEOPLE_URL.replace(":id", 1)}`;
const opti = { crossDomain: true };
function optenerPersona(id) {
const urlp = `${URL_API}${PEOPLE_URL.replace(":id", id)}`;

$.get(urlp, opti, function (person) {
console.log(
`Mi nombre es ${person.name} y he participado en estas peliculas: `
);
let movies = person.films;
for (let movie in movies) {
let urlfilms = `${URL_API}${FILMS_URL.replace(":id", movie)}`;

if (urlfilms !== movies[movie]) {
urlfilms = movies[movie];

$.get(urlfilms, opti, function (film) {
console.log(`${film.title}`);
});
}
}
});
}

optenerPersona(3);