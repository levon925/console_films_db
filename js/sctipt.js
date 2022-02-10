let numberOfFilms = prompt("Сколько фильмов вы уже смотрели?");

console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};