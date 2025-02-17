const { UserList } = require('../FakeData');
const { MovieList } = require('../MovieData');

const resolvers = {
   Query : {
      // User resolvers
      users() { 
         return UserList;
      },
      user(_, { id }) {
         return UserList.find(user => user.id === Number(id));
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

   Mutation: {
      createUser: (_ , args) => {
         const user = args.user;
         const lastid = UserList[UserList.length - 1].id;
         user.id = lastid + 1;
         UserList.push(user);
         return user;
         
      },


      updateUser: (_, args) => {
         const { id , username} = args.user;
         let userUpdate;
         UserList.forEach((user) => {
            if(user.id === Number(id)) {
               user.username = username;
               userUpdate = user;
            }
         })

         return userUpdate;
        
      }

   }

};

module.exports = {resolvers};