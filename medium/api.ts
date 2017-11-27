import 'isomorphic-fetch'
import { toJSON, formatData } from '../medium/parser'

export const getPosts = (params: any) => {
  const { tag, limit } = params.variables
  return fetch(`https://medium.com/tag/${tag}?limit=20&format=json`)
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

