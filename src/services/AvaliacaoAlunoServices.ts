import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class AvaliacaoAlunoServices {
  async getAllAvaliacoes() {
    return await prisma.avaliacaoAluno.findMany();
  }

  async criarAvaliacao(data: any) {
    const { alunoId, grupoId } = data;

    // Verificar se o aluno pertence ao grupo
    const aluno = await prisma.aluno.findUnique({ where: { id: alunoId }, include: { grupos: true } });
    if (aluno && aluno.grupos.some((grupo: { id: any; }) => grupo.id === grupoId)) {
      throw new Error("O aluno não pode avaliar o grupo ao qual pertence.");
    }

    // Verificar se o aluno já avaliou o grupo anteriormente
    const avaliacaoExistente = await prisma.avaliacaoAluno.findFirst({
      where: {
        alunoId: alunoId,
        grupoId: grupoId,
      },
    });
    if (avaliacaoExistente) {
      throw new Error("O aluno já avaliou este grupo.");
    }

    try {
      const avaliacao = await prisma.avaliacaoAluno.create({
        data: {
          alunoId: data.alunoId,
          grupoId: data.grupoId,
          criterioId: data.criterioId,
          nota: data.nota,
        },
      });
      return avaliacao;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao criar a avaliação");
    }
  }

  async updateAvaliacao(id: number, data: any) {
    try {
      const avaliacao = await prisma.avaliacaoAluno.update({
        where: { id: id },
        data: data,
      });
      return avaliacao;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao atualizar avaliação");
    }
  }

  async deleteAvaliacao(id: number) {
    try {
      const avaliacao = await prisma.avaliacaoAluno.delete({
        where: { id: id },
      });
      return avaliacao;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao deletar avaliação");
    }
  }

  async getAvaliacaoById(id: number) {
    try {
      const avaliacao = await prisma.avaliacaoAluno.findUnique({
        where: { id: id },
      });
      return avaliacao;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao obter avaliação por ID");
    }
  }
}

export default new AvaliacaoAlunoServices();