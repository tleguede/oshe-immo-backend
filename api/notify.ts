import type { VercelRequest, VercelResponse, } from '@vercel/node';
import { corsHandler, messaging } from '../api-utils/configs';

export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {

    corsHandler(request, response, async () => {

    const body = request.body;

      const snap = await  messaging.sendMulticast({
            tokens:[...body?.tokens],
            data:{
                title:body?.title,
                description:body?.description,
                ...body?.data ,

            },
            notification:{ 
                title:body?.title,
                body:body?.description,
            }
        });

        response.status(200).json({
            body: request.body,
            query: request.query,
            cookies: request.cookies,
            headers: request.headers,
            result:snap
        });
    })


}