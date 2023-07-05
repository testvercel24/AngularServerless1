import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function (request: VercelRequest, response: VercelResponse) {
  console.log('hello');
  const { name = 'World' } = request.query;
  response.status(200).json({
    message: `Hello ${name}!`,
  });
}
