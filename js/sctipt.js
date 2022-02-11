let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else  if(personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDB.private){
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres(){
    let j = 0;
    for(let i = 1; i<=3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();