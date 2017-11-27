// const posts = require('../../__mock_data__/mock')
import { TimestampType } from '../utils/timestampDef'
interface param {
  limit: number,
  tag: string
}
module.exports = {
  Query: {
    allPosts: (posts: any) => posts,
  },
  
  Timestamp: TimestampType,
}
