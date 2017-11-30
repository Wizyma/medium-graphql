const graphqlHTTP = require('express-graphql')
const schema  = require('../graphql/schema')
import { getPosts } from '../medium/api'
import { graphqlParams } from '../typeDefs'

export default graphqlHTTP(
  async (request: any, response: any, graphQLParams: graphqlParams) => ({ 
    schema,
    rootValue: await getPosts(graphQLParams),
    graphiql: process.env.ENV_VARIABLE === 'production' ? false : true,
    pretty: true,
  }))

