const UserList = [
   {
      id: "1",
      username: "john_doe",
      email: "john@example.com",
      password: "password123",
      role: "ADMIN",
      friends: [
         {
            id: "2",
            username: "jane_doe",
            email: "jane@example.com",
            password: "password123",
            role: "USER"
         }
      ] ,
      wife: {
         id: "3",
         username: "alice_smith",
         email: "",
         password: "password123",
         role: "USER"
      },

      favoriteMovies: [
         {
            id: 1,
            title: 'The Shawshank Redemption',
            releaseDate: 2003,
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
         }
      ]
      
   
   },
   {
      id: "2",
      username: "jane_doe",
      email: "jane@example.com",
      password: "password123",
      role: "USER",
      friends: [
         {
            id: "1",
            username: "john_doe",
            email: "john@example.com",
            password: "password123",
            role: "ADMIN"
         }
      ] ,
      wife: {
         id: "3",
         username: "Salina",
         email: "",
         password: "password123",
         role: "USER"
      }
         
      
   },
   {
      id: "3",
      username: "alice_smith",
      email: "alice@example.com",
      password: "password123",
      role: "USER",
      wife: {
         id: "1",
         username: "john_doe",
         email: "",
         password: "password123",
         role: "ADMIN"
      }
   },
   {
      id: "4",
      username: "bob_jones",
      email: "bob@example.com",
      password: "password123",
      role: "USER",
      wife: {
         id: "1",
         username: "Marry",
         email: "",
         password: "password123",
         role: "ADMIN"
      }
   },
   {
      id: "5",
      username: "charlie_brown",
      email: "charlie@example.com",
      password: "password123",
      role: "USER",
    
   }
]

module.exports = { UserList };