let numberOfFilms = prompt("Сколько фильмов вы уже смотрели?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for(let i = 0; i < 2; i ++) {
    let a = '',
        b = '';
    while(a == '' || a == null|| a.length > 50 ){
        a = prompt("Один из последних просмотренных фильмов?");
    };
    while(b == '' || b == null|| b.length > 50){
        b = prompt("На сколько оцените его?");
    }
    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else  if(personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}