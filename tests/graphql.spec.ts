const chai = require('chai')
const expect = chai.expect
chai.should()
import 'mocha'
import mediumServer from '../index'
import * as bodyParser from 'body-parser'
import 'isomorphic-fetch'

// create a server for testing purpose
import * as express from 'express'
import { getPosts } from '../medium/api'
const request = require('supertest')

describe('mediumServer', () => {
  const app = express()
  app.use('/graphql', mediumServer)
  app.use(bodyParser.json())
  app.listen(1448)

  after(() => {
    setTimeout(() => {
      process.exit()
    },         5000)
  })

  it('should return the data requested to the grapgql server', () => {
    return request(app).post('/graphql')
    .send({
      query: `query Post($tag: String!, $limit: Int){
        allPosts(tag: $tag, limit: $limit){
          id,
          url,
          title,
          firstPublishedAt,
          content{
            subtitle
          },
          virtuals{
            previewImage{
              imageId
            }
          }
        }
      }`,
      variables: {
        tag: 'react',
        limit: 10,
      },
    })
    .then((res: any) => {
      const json = JSON.parse(res.text)
      expect(json.data).to.have.all.deep.keys('allPosts')
    })
  })

  it('should return a formated array of object', () => {
    getPosts({
      query: `query Post($tag: String!, $limit: Int){
        allPosts(tag: $tag, limit: $limit){
          id,
          url,
          title,
          firstPublishedAt,
          content{
            subtitle
          },
          virtuals{
            previewImage{
              imageId
            }
          }
        }
      }`,
      variables: {
        tag: 'react',
        limit: 10,
      },
    })
    .then((data: any) => {
      expect(data).to.be.an('array')
    })
  })
})
