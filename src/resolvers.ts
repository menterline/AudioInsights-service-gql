import { books } from "./data";

export const resolvers = {
  Query: {
    books: () => books,
  },
  Book: {
    titleAndAuthor: (parents, args, context, info) => {
      return `${parents.title} by ${parents.author}`;
    },
  },
};
