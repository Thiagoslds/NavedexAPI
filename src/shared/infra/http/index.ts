import {Router} from 'express'
import usersRouter from '../../../modules/users/infra/http/routes/users.routes'
import naversRouter from '../../../modules/navers/infra/http/routes/navers.routes'
import projectsRouter from '../../../modules/projects/infra/http/routes/projects.routes'
import sessionsRouter from '../../../modules/users/infra/http/routes/session.routes'

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/navers', naversRouter);
routes.use('/projects', projectsRouter);
routes.use('/login', sessionsRouter);


export default routes;