import { Router } from "express";
import ProfessorController from "../controllers/ProfessorController";

const ProfessorRouter = Router();

ProfessorRouter.get("/", ProfessorController.getAllProfessores);
ProfessorRouter.post("/", ProfessorController.createProfessor);
ProfessorRouter.put("/:id", ProfessorController.updateProfessor);
ProfessorRouter.delete("/:id", ProfessorController.deleteProfessor);
ProfessorRouter.get("/:id", ProfessorController.getProfessorById);

export default ProfessorRouter;
