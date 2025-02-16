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

   enum Role {
      ADMIN
      HELPER
      USER
   }

   `;

module.exports = { typeDefs };