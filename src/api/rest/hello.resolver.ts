import { IncomingMessage, ServerResponse} from 'node:http';

export const helloRoute = [
  {
    method: 'GET',
    path: '/hello',
    exec: (req: IncomingMessage, res: ServerResponse) => {
      const response = { message: 'hello world!' };

      res.writeHead(200, { 'Content-Type': 'application/json' })
      return res.end(JSON.stringify(response))
    }
  }
]
