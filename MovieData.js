const MovieList = [
   {
      id: 1,
      title: 'The Shawshank Redemption',
      releaseDate: 1994,
      rating: 9.3,
      actors: [
         { id: 1, name: 'Tim Robbins' },
         { id: 2, name: 'Morgan Freeman' }
      ]
   },
   {
      id: 2,
      title: 'The Godfather',
      releaseDate: 1972,
      rating: 9.2,
      actors: [
         { id: 3, name: 'Marlon Brando' },
         { id: 4, name: 'Al Pacino' }
      ]
   },
   {
      id: 3,
      title: 'The Dark Knight',
      releaseDate: 2008,
      rating: 9.0,
      actors: [
         { id: 5, name: 'Christian Bale' },
         { id: 6, name: 'Heath Ledger' }
      ]
   },
   {
      id: 4,
      title: '12 Angry',
      releaseDate: 1957,
      rating: 8.9,
      actors: [
         { id: 7, name: 'Henry Fonda' },
         { id: 8, name: 'Lee J. Cobb' }
      ]  
   },
   {
      id: 5,
      title: 'Schindlers List',
      releaseDate: 1993,
      rating: 8.9,
      actors: [
         { id: 9, name: 'Liam Neeson' },
         { id: 10, name: 'Ralph Fiennes' }
      ]
   }  
];

module.exports = { MovieList };