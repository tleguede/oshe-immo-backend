import type { VercelRequest, VercelResponse, } from '@vercel/node';
import { corsHandler, messaging } from '../api-utils/configs';

export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {

    corsHandler(request, response, async () => {
        try {
            const body = JSON.parse(request.body);

            console.log("====== body")
            console.log(typeof request.body)
            console.log(request.body)
            console.log("====== body")
            console.log(body)

            const snap = await messaging.sendMulticast({
                tokens: [...body?.tokens],
                data: {
                    title: body?.title,
                    description: body?.description,
                    ...body?.data,

                },
                notification: {
                    title: body?.title,
                    body: body?.description,
                }
            });

            response.status(200).json({
                body: request.body,
                query: request.query,
                cookies: request.cookies,
                headers: request.headers,
                result: snap
            });
        } catch (error) {
            console.log(error);
            response.status(400).json({
                body: request.body,
                query: request.query,
                cookies: request.cookies,
                headers: request.headers,
                error
            });
        }

    })


}