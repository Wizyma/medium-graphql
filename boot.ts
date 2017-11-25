import  { Server }  from './server/server'

export const serv = new Server({
  port: 1339,
})

serv.run()
