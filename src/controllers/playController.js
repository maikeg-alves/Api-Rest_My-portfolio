import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export default {


  //função que criar os plays

  async CreatePlay(req, res) {
    try {
      const { emoji, pause } = req.body;

      //caso o emoji já exista e não deixa os emojis se repetir

      let play = await prisma.play.findUnique({
        where: {
          emoji,
        },
      });

      //caso o emoji já exista no banco de dados
      if (play) {
        return res.json({
          error: "emoji existente!",
        });
      }

      play = await prisma.play.create({
        data: {
          emoji,
          pause,
        },
      });

      return res.json(play);
    } catch (error) {
      return res.json({
        error,
      });
    }
  },

  //função que apresenta todos os plays criados 

  async findAllPlays(req, res) {
    try {
      const plays = await prisma.play.findMany();
      return res.json(plays);
    } catch (error) {
      return res.json({
        error,
      });
    }
  },

  //funçã que procura e apresenta um unico play

  async findPlay(req, res) {
    try {
      const { id } = req.params;
      const play = await prisma.play.findUnique({ where: { id: Number(id) } });

      if (!play) {
        return res.json({ error: "id do play não encontrado" });
      }

      return res.json(play);
    } catch (error) {
      return res.json({
        error,
      });
    }
  },

  //função responsavel por atualizar os dados do play

  async updatePlay(req, res) {
    try {
      const { id } = req.params;
      const { emoji, pause } = req.body;

      let play = await prisma.play.findUnique({ where: { id: Number(id) } });

      if (!play) {
        return res.json({ error: "id do play não encontrado" });
      }

      play = await prisma.play.update({
        where: { id: Number(id) },
        data: { emoji, pause },
      });

      return res.json(play);
    } catch (error) {
      return res.json({ error });
    }
  },

  //funcção responsavel por deletar o play

  async deletePlay(req, res) {
    try {
      const { id } = req.params;
      let play = await prisma.play.findUnique({ where: { id: Number(id) }, });

      if (!play) {
        return res.json({ error: "id do play não encontrado" });
      }

      play = await prisma.play.delete({ where: { id: Number(id) }, });

      return res.json({ menssager: "Play excluido com sucesso!"});
    } catch (error) {
      return res.json({ error });
    }
  },

};
