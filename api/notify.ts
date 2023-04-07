import type {VercelRequest, VercelResponse,} from '@vercel/node';

export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {

    response.status(200).json({
        body: request.body,
        query: request.query,
        cookies: request.cookies,
        headers: request.headers,
    });
}