import { Router } from "express";
import GrupoController from "../controllers/GrupoController";

const GrupoRouter = Router();

GrupoRouter.get("/", GrupoController.getAllGrupos);
GrupoRouter.post("/", GrupoController.createGrupo);
GrupoRouter.put("/:id", GrupoController.updateGrupo);
GrupoRouter.delete("/:id", GrupoController.deleteGrupo);
GrupoRouter.get("/:id", GrupoController.getGrupoById);

export default GrupoRouter;
