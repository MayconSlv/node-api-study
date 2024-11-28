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
  },
  {
    method: 'POST',
    path: '/hello/email',
    exec: (req: any, res: ServerResponse) => {
      const { email } = req.body;

      if (!email) {
        return res.writeHead(400).end('Missing email parameter');
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ message: `The email ${email} is valid.` }));
    }
  }
]
