import 'isomorphic-fetch'
import { toJSON, formatData } from '../medium/parser'

interface request {
  tag: string,
  limit: number
}

export const getPosts = (params: any) => {
  return fetch(`https://medium.com/tag/${params.tag}?limit=${params.limit ? params.limit : 10}&format=json`)
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

