import userController from './controllers/UserController';
import { Router } from "express";

const router = Router();

router.get('/', (request, response) => {
    return response.status(200).json({ success: true });
});

router.post('/', (request, response) => {
    return response.status(201).send();
});

router.post('/user', userController.Create);

export { router };
