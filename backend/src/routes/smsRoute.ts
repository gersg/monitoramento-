import { Router } from "express";
import { SmsMiddleware } from "../middleware/authSms";
import { SmsController } from "../controllers/smsAlert";


const alert = Router();

alert.post('/alerta', SmsMiddleware.validateSmsRequest, SmsController.sendSms);

export default alert;