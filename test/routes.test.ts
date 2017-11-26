import 'mocha'
import { should, expect } from 'chai'
import { Request, Response, Router } from 'express'
const request = require('supertest')
import { serv as server } from '../boot'
const mock = require('../__mock_data__/mock')

// mock data correspond to the react tag search
xdescribe('/tag', () => {
  it('should return hello', () => {
    return request(server).get('/tag?limit=10&tag=react').then((res: any) => {
      res.status.should.equal(200)
      res.body.should.eql(mock)
    })
  })
})
