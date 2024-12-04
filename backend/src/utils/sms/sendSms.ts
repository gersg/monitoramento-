// src/utils/smsUtils.ts
import * as http from 'http';
import 'dotenv/config'

const KEY = process.env.SMS_KEY || "";

export const smsOptions = {
    method: "GET",
    hostname: "api.smsdev.com.br",
    port: 80,
    headers: {},
};

export class SmsUtils {
    static sendSms(message: string, phoneNumber: string): Promise<string> {
        return new Promise((resolve, reject) => {

            const options = {
                ...smsOptions,
                path: `/v1/send?key=${KEY}&type=9&number=${phoneNumber}&msg=${encodeURIComponent(message)}`
            };

            const req = http.request(options, (res: http.IncomingMessage) => {
                const chunks: Buffer[] = [];

                res.on("data", (chunk: Buffer) => {
                    chunks.push(chunk);
                });

                res.on("end", () => {
                    const body = Buffer.concat(chunks).toString();
                    resolve(body);
                });
            });

            req.on("error", (err: Error) => {
                reject(`Erro ao enviar SMS: ${err.message}`);
            });

            req.end();
        });
    }
}
