import { Router } from 'express';
import ensureAuthenticated from '../../../../users/infra/middlewares/ensureAuthenticated';
import NaversController from '../controllers/NaversController'

const naversController = new NaversController();
const naversRouter = Router();

naversRouter.use(ensureAuthenticated);
naversRouter.post('/store', naversController.create);
naversRouter.get('/show/name', naversController.showName);
naversRouter.get('/show/job', naversController.showJob);
naversRouter.get('/show/date', naversController.showDate);
naversRouter.get('/show/:id', naversController.show);
naversRouter.get('/index', naversController.index);
naversRouter.post('/update/:id', naversController.update);
naversRouter.get('/delete/:id', naversController.delete);

export default naversRouter;
