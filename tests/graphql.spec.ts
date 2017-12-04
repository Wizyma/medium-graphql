const chai = require('chai')
const expect = chai.expect
chai.should()
import 'mocha'
import mediumServer from '../index'
import * as bodyParser from 'body-parser'
import 'isomorphic-fetch'
import * as path from 'path'
import fs from 'fs'

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

  it('should return 200 on the graphql path', () => {
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
        limit: 1,
      },
    })
    .then((res: any) => {
      res.status.should.equal(200)
    })
  })
})
