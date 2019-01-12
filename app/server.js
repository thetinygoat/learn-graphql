const express = require("express");
const graphqlHttp = require("express-graphql");
const bodyParser = require("body-parser");
const app = express();
const gschema = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
// app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHttp({
    schema: gschema,
    rootValue: resolvers
  })
);

app.listen(8080);
