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
      }
      
   
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