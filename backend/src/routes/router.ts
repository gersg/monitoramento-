import { Router, Request, Response } from "express";
import alert from "./smsRoute";

const routes = Router();

routes.use(alert);

routes.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Server OK"
    });
});

export default routes;