import { Router, request, response } from 'express';
import ensureAuthenticated from '../../../../users/infra/middlewares/ensureAuthenticated';
import NaversController from '../controllers/NaversController'

const naversController = new NaversController();
const naversRouter = Router();

naversRouter.use(ensureAuthenticated);
naversRouter.post('/store', naversController.create);
naversRouter.get('/show/:id', naversController.show);
naversRouter.get('/showname', naversController.showName);
naversRouter.get('/showjob', naversController.showJob);
naversRouter.get('/showdate', naversController.showDate);
naversRouter.get('/index', naversController.index);
naversRouter.post('/update/:id', naversController.update);
naversRouter.get('/delete/:id', naversController.delete);

export default naversRouter;
