import { Router } from 'express';
import { InfoPointController } from './controllers/InfoPointController';
import { TaskController } from './controllers/TaskController';
import { UserController } from './controllers/UserController';
import { UserLocationController } from './controllers/UserLocationController';

import { Auth } from './middlewares/Auth';

const auth = new Auth();

const userControler = new UserController();
const infoPointController = new InfoPointController();
const userLocationController = new UserLocationController();
const taskController = new TaskController();

const routes = Router();

routes.post("/login",userControler.login);
routes.post("/users",userControler.create);

routes.use(auth.AuthLogin);

routes.post("/infoPoint",infoPointController.create);
routes.post("/infoPoint/location",userLocationController.create);
routes.post("/task",taskController.create);
routes.get("/task/:id",taskController.showByTask);

export {routes};
