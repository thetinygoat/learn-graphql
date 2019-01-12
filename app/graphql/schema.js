const { buildSchema } = require("graphql");

module.exports = buildSchema(`

	type TestQuery{
		text: String!
		info: String!
	}
	type RootQuery{
		hello: TestQuery!
	}
	schema {
		query: RootQuery
	}
`);
