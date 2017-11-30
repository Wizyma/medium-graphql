import * as express from 'express'
import * as path from 'path'
import * as bodyParser from 'body-parser'
import * as logger from 'morgan'
import * as cors from 'cors'
const graphqlHTTP = require('express-graphql')
const schema  = require('../graphql/schema')
import { getPosts } from '../medium/api'
import { graphqlParams, ServerOptions } from '../typeDefs'
// import * as cookieParser from 'cookie-parser' use later

/**
 *  Create our web server
 * 
 * @export
 * @class Server
 */
export class Server {

  public options: ServerOptions
  public app: express.Application

  constructor (options: ServerOptions) {
    const defaults: ServerOptions = {
      port: 8080,
    }

    this.options = { ...defaults, ...options }

    this.app = express()

    this.config()
  }

  /**
   * Configure initial middlewares
   * 
   * @memberof Server
   */
  private config () {
    this.app.use(logger('dev'))
    if (process.env.ENV_VARIABLE !== 'production') {
      this.app.use('*', cors())
    }
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded())
    // this.router() no routes for now
    this.app.use('/graphql', graphqlHTTP(
      async (request: express.Request, response: express.Response, graphQLParams: graphqlParams) => ({ 
        schema,
        rootValue: await getPosts(graphQLParams),
        graphiql: process.env.ENV_VARIABLE === 'production' ? false : true,
        pretty: true,
      })))
    this.app.use(this.notFoundMiddleware)
  }

  /**
   * Launch the web server
   * 
   * @memberof Server
   */
  public run () {
    this.app.listen(this.options.port, () => {
      console.log(`Started on port ${this.options.port}`)
    })
  }

  public router () {
    const router = express.Router()
  }

  /**
   * Middleware to be used when no middleware has handled the request
   * 
   * @private
   * @param {express.Request} req 
   * @param {express.Response} res 
   * @param {express.NextFunction} next 
   * @memberof Server
   */
  private notFoundMiddleware(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    res.statusCode = 404
    res.sendFile(path.resolve(__dirname, '../template/notfound.html'))
  }
}
