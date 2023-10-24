import express from "express";
import AvaliacaoProfController from "../controllers/AvaliacaoProfController";

const router = express.Router();

router.get("/", AvaliacaoProfController.getAllAvaliacoes);
router.post("/", AvaliacaoProfController.createAvaliacao);
router.put("/:id", AvaliacaoProfController.updateAvaliacao);
router.delete("/:id", AvaliacaoProfController.deleteAvaliacao);
router.get("/:id", AvaliacaoProfController.getAvaliacaoById);

export default router;
