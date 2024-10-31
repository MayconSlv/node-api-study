import http from 'node:http';
import { helloRoute } from './rest/hello.resolver';

export class Server {
  private readonly server: http.Server;

  constructor() {
    this.server = http.createServer((req, res) => this.configure(req, res))
  }

  configure(req: http.IncomingMessage, res: http.ServerResponse) {
    const { method, url } = req;

    const route = helloRoute.find((route) => {
      return route.method === method && route.path === url;
    })

    if (route) {
      return route.exec(req, res)
    }

    return res.writeHead(404).end()
  }

  run(): void {
    this.server.listen(3000, () => console.log('server is running on https://localhost:3000'))
  }
}