const { gql } = require('apollo-server');

const typeDefs = gql`

   type User {
      id: ID!
      username: String!
      email: String!
      password: String!
      role: Role!
      friends: [User]
      wife: User

   }

   type Query {
      users : [User!]!
   }

   enum Role {
      ADMIN
      HELPER
      USER
   }

   `;

module.exports = { typeDefs };