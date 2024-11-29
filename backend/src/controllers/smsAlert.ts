// src/controllers/smsController.ts
import { Request, Response } from 'express';
import { SmsUtils } from '../utils/sms/sendSms';
import 'dotenv/config'

const secretaryNum = process.env.SEC_NUMBER || "";

export class SmsController {
    static async sendSms(req: Request, res: Response): Promise<Response> {
        const { message } = req.body;

        const to = secretaryNum;

        try {
            const response = await SmsUtils.sendSms(message, to);
            return res.status(200).json({ success: true, response });
        } catch (error) {
            console.error('Failed to send SMS:', error);
            return res.status(500).json({ error: 'Failed to send SMS' });
        }
    }
}
