import http, { IncomingMessage, ServerResponse } from 'node:http';
import { helloRoute } from './rest/hello.resolver';

declare module 'http' {
  interface IncomingMessage {
    body?: any;
  }
}

export class Server {
  private readonly server: http.Server;

  constructor() {
    this.server = http.createServer((req: IncomingMessage, res: ServerResponse) => this.configure(req, res))
  }

  async configure(req: http.IncomingMessage, res: http.ServerResponse) {
    const { method, url } = req;

    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }

    try {
      req.body = JSON.parse(Buffer.concat(buffers).toString());
    } catch (error) {
      req.body = null;
    }

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