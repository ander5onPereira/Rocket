import express from 'express';

const routes  = express.Router();

import ClassesControllers from './controllers/ClassesControllers';
import ConnectionsController from './controllers/ConnectionsController';
const classesControllers = new ClassesControllers();

const connectionsController=new ConnectionsController();

routes.get("/classes",classesControllers.index);
routes.post("/classes",classesControllers.create);

routes.get("/connections",connectionsController.index);
routes.post("/connections",connectionsController.create);

export default routes;