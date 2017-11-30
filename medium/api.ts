import 'isomorphic-fetch'
import { toJSON, formatData } from '../medium/parser'
import { graphqlParams } from '../typeDefs'

const def = {
  variables: {
    tag: 'react',
    limit: 10,
  },
}

export const getPosts = (params: graphqlParams) => {
  const { tag, limit } = params.variables || def.variables
  return fetch(`https://medium.com/tag/${tag ? tag : 'react'}?limit=20&format=json`)
    .then((response) => {
      return response.text()
    })
    .then((results) => {
      const json = toJSON(results)
      const Posts = formatData(json)
      return Posts
    })
    .catch((err) => {
      console.warn(err)
    })
}

