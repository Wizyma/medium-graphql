import { Request, Response, NextFunction, Router } from 'express'

export interface Route {
  path: string,
  action: string,
  verb: string,
}


export abstract class BaseController {
  public url: string
  
  constructor() {
    this.url = 'https://medium.com'
  }


  static routes: Route[] = []

  public req: Request
  public res: Response

  static connect(router: any, instance: any) {
    const routes = []
    for (const idx in this.routes) {
      routes.push(this.routes[idx])
    }

    const rt: Router[] = routes.map((route: Route) => {
      return router[route.verb](route.path, (req: Request, res: Response) => {
        instance[route.action](req, res)
      })
    })

    return rt
  }
}
