import express from "express";

import multer from "multer";

import uploadConfig from "./config/upload";
const routes = express.Router();

const upload = multer(uploadConfig);

import Exemplo from "./controllers/Exemplo";
import OrphanageControllers from "./controllers/OrphanageControllers";

const exemplo = new Exemplo();

routes.get("/status", exemplo.index); // rotas de teste GET
routes.post("/status", exemplo.create); // rota de teste POST

routes.post("/orphanages", upload.array("images"), OrphanageControllers.create);
routes.get("/orphanages", OrphanageControllers.index);
routes.get("/orphanages/:id", OrphanageControllers.show);

export default routes;
