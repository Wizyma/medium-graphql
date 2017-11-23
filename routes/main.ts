import { BaseController, Route } from './base'
import { Router, Request, Response } from 'express'
import * as path from 'path'

export class Main extends BaseController {

  constructor(){
    super()
  }

  static routes: Route[] = [
    { verb: 'get', path: '/top', action: 'hotPosts' },
    { verb: 'get', path: '/tag', action: 'postTag' },
  ]
  
  private hotPosts = (req: Request, res: Response) => {
    res.send('hello')
  }

  private postTag = (req: Request, res: Response) => {
    res.send('hello')
  }
}
