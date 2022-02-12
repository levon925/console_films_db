let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: () => {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже смотрели?");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже смотрели?");
        }
    },
    rememberMyFilms: () => {
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
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else  if(personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: () => {
        if (!personalMovieDB.private){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: () => {
        //personalMovieDB.private != personalMovieDB.private;
        if (personalMovieDB.private){
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
        
    },
    writeYourGenres: () => {
        for(let i = 1; i<=3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if(genre === '' || genre == null) {
                console.log('error error error');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i + 1} - это ${item}`);
        });
    },
};
//start();
//rememberMyFilms();
//detectPersonalLevel();
//showMyDB();
//writeYourGenres();