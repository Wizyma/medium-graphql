import chai, { expect, should } from 'chai'
import 'mocha'
import mediumServer from '../server/server'
import { toJSON, formatData } from '../medium/parser'
import * as bodyParser from 'body-parser'
import * as logger from 'morgan'
import 'isomorphic-fetch'
import * as path from 'path'

// create a server for testing purpose
import * as express from 'express'
const request = require('supertest')


describe('mediumServer', () => {
  const app = express()
  before(() => {
    app.use('/graphql', mediumServer)
    app.use(bodyParser.json())
    app.use('/static', express.static(path.join(path.resolve(__dirname, '../__mock_data__'))))
    app.use(logger('dev'))
    app.listen(1339)
  })

  it('should return 200 on the graphql path', () => {
    return request(app).post('/graphql')
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
      expect(res.status).equal(200)
    })
  })
})
