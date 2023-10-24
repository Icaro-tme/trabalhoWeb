import { Router } from "express";
import AvaliacaoController from "../controllers/AvaliacaoAlunoController";

const AvaliacaoRouter = Router();

AvaliacaoRouter.get("/", AvaliacaoController.getAllAvaliacoes);
AvaliacaoRouter.post("/", AvaliacaoController.createAvaliacao);
AvaliacaoRouter.put("/:id", AvaliacaoController.updateAvaliacao);
AvaliacaoRouter.delete("/:id", AvaliacaoController.deleteAvaliacao);
AvaliacaoRouter.get("/:id", AvaliacaoController.getAvaliacaoById);

export default AvaliacaoRouter;
