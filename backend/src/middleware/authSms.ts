import { Request, Response, NextFunction } from 'express';

export class SmsMiddleware {
    static async validateSmsRequest(req: Request, res: Response, next: NextFunction) {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Missing "message" in request body' });
        }

        next();
    }
}
