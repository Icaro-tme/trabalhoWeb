import { Router } from "express";
import CriterioController from "../controllers/CriterioController";

const CriterioRouter = Router();

CriterioRouter.get("/", CriterioController.getAllCriterios);
CriterioRouter.post("/", CriterioController.createCriterio);
CriterioRouter.put("/:id", CriterioController.updateCriterio);
CriterioRouter.delete("/:id", CriterioController.deleteCriterio);
CriterioRouter.get("/:id", CriterioController.getCriterioById);

export default CriterioRouter;
