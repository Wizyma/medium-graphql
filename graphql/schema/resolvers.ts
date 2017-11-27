import { TimestampType } from '../utils/timestampDef'

interface params {
  tag: string,
  limit?: number
}

module.exports = {
  Query: {
    allPosts: (posts: any, { tag, limit }: params) => posts.filter((post: any, i: number) => {
      if ((i + 1) <= limit) {
        return post
      } 
    }),
  },

  Timestamp: TimestampType,
}
