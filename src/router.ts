import userController from './controllers/UserController';
import { Router } from "express";

const router = Router();

router.post('/users', userController.Create);
router.get('/users', userController.Get);
router.get('/users/:id', userController.GetById);

export { router };
