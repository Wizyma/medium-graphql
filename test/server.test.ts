import 'mocha'
import { should, expect } from 'chai'
import { Request, Response, Router } from 'express'
const request = require('supertest')
import { serv as server } from '../boot'


xdescribe('/top', () => {
  it('should return top', () => {
    return request(server).get('/top').then((res: any) => {
      res.status.should.equal(200)
      res.body.should.equal('top')
    })
  })
})

xdescribe('/tag', () => {
  it('should return hello', () => {
    return request(server).get('/tag').then((res: any) => {
      res.status.should.equal(200)
      res.body.should.equal('hello')
    })
  })
})
