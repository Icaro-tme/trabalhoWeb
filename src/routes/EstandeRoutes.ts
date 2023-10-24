import { Router } from "express";
import EstandeController from "../controllers/EstandeController";

const EstandeRouter = Router();

EstandeRouter.get("/", EstandeController.getAllEstandes);
EstandeRouter.post("/", EstandeController.createEstande);
EstandeRouter.put("/:id", EstandeController.updateEstande);
EstandeRouter.delete("/:id", EstandeController.deleteEstande);
EstandeRouter.get("/:id", EstandeController.getEstandeById);

export default EstandeRouter;
