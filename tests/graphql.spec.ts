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
  // const app = express()
  // app.use('/graphql', mediumServer)
  // app.use(bodyParser.json())
  //  app.listen(1448)
  // server does not stop after the tests...

  after((done: MochaDone) => {
    done()
  })

  xit('should return 200 on the graphql path', () => {
    return request().post('/graphql')
    .send({
      query: `query Post($tag: String!, $limit: Int){
        allPosts(tag: $tag, limit: $limit){
          id,
          url,
          title,
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
      res.status.should.equal(200)
    })
  })

  it('should retuns the posts', () => {
    getPosts({
      query: `query Post($tag: String!, $limit: Int){
        allPosts(tag: $tag, limit: $limit){
          id,
          url,
          title,
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
      res.length.should.equal(9)
    })
  })
})
