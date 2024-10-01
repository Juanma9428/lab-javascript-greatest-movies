// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    //const directors = moviesArray.map( movie => movie.director);
    const directorsNorepeat = moviesArray.reduce((arr, elem) =>{
        if (!arr.includes(elem.director)) {
            arr.push(elem.director)
        }
        return arr;
    },[])
    return directorsNorepeat;
 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMovies = moviesArray.filter(drama => drama.genre.includes("Drama") && drama.director.includes("Steven Spielberg"));
    return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;  
    }
    const bestFilmScore = moviesArray.reduce((acc, curr) => {
        if (curr.score) {
            return acc + curr.score;
        }else{
            return acc;
        }
        
    }, 0) 
    const media = bestFilmScore / moviesArray.length;


    return parseFloat(media.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"))
    if (dramaMovies.length === 0) return 0;

   const totalScore = dramaMovies.reduce((acc, curr) => {
    if (curr.score) {
        return acc + curr.score;
    }else{
        return acc;
    }
        
        },0);
        const result = totalScore / dramaMovies.length
        return parseFloat(result.toFixed(2));

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const dateOrder = [...moviesArray].sort( (a,b) =>{
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;

    });
    return dateOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titles = moviesArray.map(movie => movie.title);
    const alphabetic = titles.sort((a,b) => a.localeCompare(b));
        
    return alphabetic.slice(0, 20);


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie =>{
    const timeParts = movie.duration.match(/(\d+)h\s?(\d+)?min?/);
    const hours = parseInt(timeParts[1]) || 0;
    const minutes = parseInt(timeParts[2]) || 0;
    const totalMinutes = (hours * 60) + minutes;
    return {
        title: movie.title,
        duration: totalMinutes
    };
    });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
