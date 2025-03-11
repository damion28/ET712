/* 
Damion Ally
Homework 3 – Objects and exception handling in JS 
*/

class Movie {
    constructor(title, director, year) {
        this.title = title;
        this.director = director;
        this.year = year;
    }

    getDetails() {
        return `${this.title} (Directed by ${this.director}, Released in ${this.year})`;
    }
}

class MovieCollection {
    constructor() {
        this.movies = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
        console.log(`Added: ${movie.title}`);
    }

    removeMovie(title) {
        try {
            const index = this.movies.findIndex(movie => movie.title === title);
            if (index === -1) {
                throw new Error(`Movie "${title}" not found in collection.`);
            }
            this.movies.splice(index, 1);
            console.log(`Removed: ${title}`);
        } catch (error) {
            console.error(error.message);
        }
    }

    showMovies() {
        try {
            if (this.movies.length === 0) {
                throw new Error("No movies in the collection.");
            }
            console.log("Movie Collection:");
            this.movies.forEach(movie => console.log(movie.getDetails()));
        } catch (error) {
            console.error(error.message);
        }
    }
}

const myCollection = new MovieCollection();

const movie1 = new Movie("Inception", "Christopher Nolan", 2010);
const movie2 = new Movie("Interstellar", "Christopher Nolan", 2014);

myCollection.addMovie(movie1);
myCollection.addMovie(movie2);
myCollection.showMovies();
myCollection.removeMovie("Inception");
myCollection.showMovies();
myCollection.removeMovie("Avatar");
myCollection.showMovies();
