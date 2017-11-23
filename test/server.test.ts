const chai = require('chai')
const server = require('../server')
const should = chai.should()
const describe = require('mocha').describe()
const xit = require('mocha').xit()
const before = require('mocha').beofre()
const after = require('mocha').after()
import { Server } from '../server/server'

describe('Start', () => {
  xit('should start the server on the given port', () => {
    let serv: any
    before(() => {
      serv = new Server({ port: 1339 })
    })

    after(() => {
      serv.close()
    })
  })
})
