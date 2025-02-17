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
      favoriteMovies: [Movies]
   }

   type Movies {
      id: ID!
      title: String!
      releaseDate: String!
      rating: Float!
   }

   type Query {
      users : [User!]!
      user(id: ID!): User!
      movies: [Movies!]!
      movie(id: ID!): Movies!
   }

   input UserInput {
      username: String!
      email: String!
      password: String!
      role: Role = USER
   }

   input UserUpdateInput {
      id: ID!
      username: String!
   }

   type Mutation {
      createUser(user: UserInput!): User
      updateUser(user: UserUpdateInput!): User
   }

   enum Role {
      ADMIN
      HELPER
      USER
   }

   `;

module.exports = { typeDefs };