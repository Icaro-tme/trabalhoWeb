import { Request, Response } from "express";
import AvaliacaoProfServices from "../services/AvaProfServices";

class AvaliacaoProfController {
  async getAllAvaliacoes(req: Request, res: Response) {
    try {
      const avaliacoes = await AvaliacaoProfServices.getAllAvaliacoes();
      res.status(200).json(avaliacoes);
    } catch (error) {
      res.status(500).json({ error: "Falha ao listar as avaliações" });
    }
  }

  async createAvaliacao(req: Request, res: Response) {
    try {
      const avaliacao = await AvaliacaoProfServices.criarAvaliacao(req.body);
      res.status(201).json(avaliacao);
    } catch (error) {
      res.status(500).json({ error: "Falha ao criar uma avaliação" });
    }
  }

  async updateAvaliacao(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const avaliacao = await AvaliacaoProfServices.updateAvaliacao(Number(id), req.body);
      res.status(200).json(avaliacao);
    } catch (error) {
      res.status(500).json({ error: "Falha ao atualizar a avaliação" });
    }
  }

  async deleteAvaliacao(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const avaliacao = await AvaliacaoProfServices.deleteAvaliacao(Number(id));
      res.status(200).json(avaliacao);
    } catch (error) {
      res.status(500).json({ error: "Falha ao deletar a avaliação" });
    }
  }

  async getAvaliacaoById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const avaliacao = await AvaliacaoProfServices.getAvaliacaoById(Number(id));
      res.status(200).json(avaliacao);
    } catch (error) {
      res.status(500).json({ error: "Falha ao obter a avaliação por ID" });
    }
  }
}

export default new AvaliacaoProfController();
