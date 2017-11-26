const { GraphQLScalarType } = require('graphql')
const { Kind } = require('graphql/language')

export const TimestampType = new GraphQLScalarType({
  name: 'Timestamp',
  description: 'Timestamp custom scalar type',
  parseValue(value: any) {
    return value // value from the client
  },
  serialize(value: any) {
    return value // value sent to the client
  },
  parseLiteral(ast: any) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10) // ast value is always in string format
    }
    return null
  },
})
