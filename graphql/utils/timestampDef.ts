const { GraphQLScalarType } = require('graphql')
const { Kind } = require('graphql/language')
import { astUtils } from '../../typeDefs'

export const TimestampType = new GraphQLScalarType({
  name: 'Timestamp',
  description: 'Timestamp custom scalar type',
  parseValue(value: string) {
    return value // value from the client
  },
  serialize(value: string) {
    return value // value sent to the client
  },
  parseLiteral(ast: astUtils) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10) // ast value is always in string format
    }
    return null
  },
})
