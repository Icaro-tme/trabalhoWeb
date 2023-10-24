import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class AvaliacaoProfServices {
  async getAllAvaliacoes() {
    return await prisma.avaliacaoProfessor.findMany();
  }

  async criarAvaliacao(data: any) {
    const { professorId, grupoId } = data;

    // Verificar se o professor já avaliou o grupo anteriormente
    const avaliacaoExistente = await prisma.avaliacaoProfessor.findFirst({
      where: {
        professorId: professorId,
        grupoId: grupoId,
      },
    });
    if (avaliacaoExistente) {
      throw new Error("O professor já avaliou este grupo.");
    }

    try {
        if (!data.professorId) {
          throw new Error("O ID do professor não foi fornecido.");
        }
      
        const professor = await prisma.professor.findUnique({
          where: { id: data.professorId },
        });
      
        if (!professor) {
          throw new Error("Professor não encontrado com o ID fornecido.");
        }
      
        const avaliacao = await prisma.avaliacaoProfessor.create({
          data: {
            professor: { connect: { id: data.professorId } },
            grupo: { connect: { id: grupoId } },
            criterio: { connect: { id: data.criterioId } },
            nota: data.nota,
          },
        });
      
        return avaliacao;
      } catch (error) {
        console.error(error);
        throw new Error("Erro ao criar avaliação");
      }
  }

  async updateAvaliacao(id: number, data: any) {
    try {
      const avaliacao = await prisma.avaliacaoProfessor.update({
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
      const avaliacao = await prisma.avaliacaoProfessor.delete({
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
      const avaliacao = await prisma.avaliacaoProfessor.findUnique({
        where: { id: id },
      });
      return avaliacao;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao obter avaliação por ID");
    }
  }
}

export default new AvaliacaoProfServices();