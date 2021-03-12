import { Router, request, response } from 'express';
import UsersController from '../controllers/UsersController'

const usersController = new UsersController();
const usersRouter = Router();

usersRouter.post('/signup', usersController.create);

export default usersRouter;
