// The ApolloServer constructor requires two parameters: your schema
import { ApolloServer, gql } from "apollo-server";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields: 'title' and 'author'.
  type Book {
    title: String!
    author: String!
    id: ID!
    titleAndAuthor: String!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;
