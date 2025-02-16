const { UserList } = require('../FakeData');
const { MovieList } = require('../MovieData');

const resolvers = {
   Query : {
      // User resolvers
      users() { 
         return UserList;
      },
      user(_, { id }) {
         return UserList.find(user => user.id === id);
      },

      // Movie resolvers
      movies() {
         return MovieList;
      },
      movie(_, { id }) {
         return MovieList.find(movie => movie.id === Number(id));
      }
   },
   User: {
      favoriteMovies() {
         return MovieList.filter(movie => movie.releaseDate > 2000);
      }
   },
};

module.exports = {resolvers};