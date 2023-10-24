import { Router } from "express";
import AlunoController from "../controllers/AlunoController";

const AlunoRouter = Router();

AlunoRouter.get("/", AlunoController.getAllAlunos);
AlunoRouter.post("/", AlunoController.createAluno);
AlunoRouter.put("/:id", AlunoController.updateAluno);
AlunoRouter.delete("/:id", AlunoController.deleteAluno);
AlunoRouter.get("/:id", AlunoController.getAlunoById);

export default AlunoRouter;
