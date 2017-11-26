// const posts = require('../../__mock_data__/mock')
import { TimestampType } from '../utils/timestampDef'
interface param {
  limit: number,
  tag: string
}
module.exports = {
  Query: {
    allPosts: (posts: any) => posts,

    test: () => (obj: any, { tag, limit }: param, context: any) => {
      console.log({ tag, limit })
      return context.Raw.load({ tag, limit }).then((data: any) => data)
    },
  },
  Timestamp: TimestampType,
}
