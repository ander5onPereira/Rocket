import express from 'express';

import multer from 'multer';

import uploadConfig from './config/upload';
const routes  = express.Router();

const upload=multer(uploadConfig);

import Exemplo from './controllers/Exemplo';
import OrphanageControllers from './controllers/OrphanageControllers';

const exemplo=new Exemplo();
//const orphanage=new OrphanageControllers();


routes.get("/",exemplo.index);
routes.post("/",exemplo.create);

routes.post("/orphanages",upload.array("images"),OrphanageControllers.create);
routes.get("/orphanages",OrphanageControllers.index);
routes.get("/orphanages/:id",OrphanageControllers.show);
/* routes.get("/classes",classesControllers.index); */

export default routes;
/* 
{
	"name":"Manaray",
	"latitude":-27.2184339,
	"longitude":-49.6291110,
	"about":"sobre o orfanato",
	"instructions":"venha visitar",
	"opening_hours":"Das 8h até 18h",
	"open_on_weekends":true
} */