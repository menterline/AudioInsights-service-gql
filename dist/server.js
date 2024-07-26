var express = require("express");
var { createHandler } = require("graphql-http/lib/use/express");
var { buildSchema } = require("graphql");
var { ruruHTML } = require("ruru/server");
var schema = buildSchema(`
    type Query {
      quoteOfTheDay: String
      random: Float!
      rollThreeDice: [Int]
      MyTest: String!
    }
  `);
// The root provides a resolver function for each API endpoint
var root = {
    quoteOfTheDay() {
        return Math.random() < 0.5 ? "Take it easy" : "Salvation lies within";
    },
    random() {
        return Math.random();
    },
    MyTest() {
        return "HI MATT";
    },
    rollThreeDice() {
        return [1, 2, 3].map((_) => 1 + Math.floor(Math.random() * 6));
    },
};
var app = express();
app.all("/graphql", createHandler({
    schema: schema,
    rootValue: root,
}));
app.listen(4000);
console.log("Running a GraphQL API server at localhost:4000/graphql");
// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
    res.type("html");
    res.end(ruruHTML({ endpoint: "/graphql" }));
});
