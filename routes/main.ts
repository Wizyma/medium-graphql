import { BaseController, Route } from './base'
import { Router, Request, Response } from 'express'
import * as path from 'path'
import 'isomorphic-fetch'
import { toJSON, Users, formatData, assocWithUrl } from '../medium/parser';

interface user {
  id: string,
  username: string
}

export class Main extends BaseController {

  constructor() {
    super()
  }

  static routes: Route[] = [
    { verb: 'get', path: '/tag', action: 'postTag' },
  ]

  private postTag = (req: Request, res: Response) => {
    const { limit, tag } = req.query
    fetch(`${this.url}/tag/${tag}?limit=${limit ? limit : 10}&format=json`)
      .then((response) => {
        return response.text()
      })
      .then((results) => {
        const json = toJSON(results)
        const Posts = formatData(json)

        res.json(Posts)
      })
      .catch((err) => {
        res.send(err)
      })
  }
}
