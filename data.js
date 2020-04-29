var movies = [
  {
    title: "Moon",
    year: 2009,
    director: "Duncan Jones",
    duration: "97",
    rate: 7.9,
  },
  {
    title: "2001: A Space Odyssey",
    year: 1968,
    director: "Stanley Kubrick",
    duration: "149",
    rate: 8.3,
  },
  {
    title: "Star Trek",
    year: 2009,
    director: "J.J. Abrams",
    duration: "127",
    rate: 7.9,
  },
  {
    title: "Guardians of the Galaxy",
    year: 2014,
    director: "James Gunn",
    duration: "121",
    rate: 8.0,
  },
  {
    title: "The Right Stuff",
    year: 1983,
    director: "Philip Kaufman",
    duration: "193",
    rate: 7.8,
  },
  {
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    duration: "169",
    rate: 8.6,
  },
  {
    title: "Solaris",
    year: 1972,
    director: "Andrei Tarkovsky",
    duration: "147",
    rate: 8.1,
  },
  {
    title: "Apollo 13",
    year: 1995,
    director: "Ron Howard",
    duration: "140",
    rate: 7.6,
  },
  {
    title: "Alien",
    year: 1979,
    director: "Ridley Scott",
    duration: "117",
    rate: 8.4,
  },
  {
    title: "The Martian",
    year: 2015,
    director: "Ridley Scott",
    duration: "144",
    rate: 8.0,
  },
  {
    title: "Gravity",
    year: 2013,
    director: "Alfonso Cuarón",
    duration: "91",
    rate: 7.8,
  },
  {
    title: "Star Wars: Episode VII - The Force Awakens",
    year: 2015,
    director: "J.J. Abrams",
    duration: "138",
    rate: 7.9,
  },
];
// Rate of at least 8.0
const titleAndRate = movie => movie.rate >= 8
let bestRated = movies.filter(titleAndRate)
console.log(`The best rated movies are: `)
for (let i = 0; i < bestRated.length; i++) {
  console.log(`${i+1}. ${bestRated[i].title} with ${bestRated[i].rate} of rate`)
}

// Best Movies
let bestMovies = movies.filter(titleAndRate)
console.log (`List of The best Movies -Watch later-`)
for (let i = 0; i < bestMovies.length; i++) {
  console.log(`${1 + i}. ${bestMovies[i].title}`)  
}

// Movies from Ridley Scott
const moviesRidley = movie => movie.director == "Ridley Scott"

let ridley = movies.filter(moviesRidley)
console.log(`Movies from Ridley Scott`)
for (let o = 0; o < ridley.length; o++) {
  console.log(`${1 + o} ${ridley[o].title}`)
}
// Duration movies of Ridley Scott
let shortest = [
  ...ridley
]
shortest.sort((firstMovie, secondMovie) => firstMovie.duration - secondMovie.duration)
console.log(`The movie's duration are:`)
for (let i = 0; i < 2; i++) {
  console.log(`${i + 1}. ${shortest[i].title} with ${shortest[i].duration} Min of duration.`)  
}

// Release year
let releaseYear = [
  ...movies
]
releaseYear.sort((oneMovie, anotherMovie) => anotherMovie.year - oneMovie.year)
console.log(`Release year:`)
for (let i = 0; i < releaseYear.length; i++) {
  console.log(`${i + 1}. ${releaseYear[i].year} - ${releaseYear[i].title}`)  
}