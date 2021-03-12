import { Router, request, response } from 'express';
import ensureAuthenticated from '../../../../users/infra/middlewares/ensureAuthenticated';
import ProjectsController from '../controllers/ProjectsController'

const projectsController = new ProjectsController();
const projectsRouter = Router();

projectsRouter.use(ensureAuthenticated);
projectsRouter.post('/store', projectsController.create);
projectsRouter.get('/show/:id', projectsController.show);
projectsRouter.get('/showname', projectsController.findByName);
projectsRouter.get('/index', projectsController.index);
projectsRouter.post('/update/:id', projectsController.update);
projectsRouter.get('/delete/:id', projectsController.delete);

export default projectsRouter;
