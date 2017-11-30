import { TimestampType } from '../utils/timestampDef'
import { resolverParams } from '../../typeDefs'

module.exports = {
  Query: {
    allPosts: (posts: any, { tag, limit }: resolverParams) => posts.filter((post: any, i: number) => {
      if ((i + 1) <= limit) {
        return post
      } 
    }),
  },

  Timestamp: TimestampType,
}
