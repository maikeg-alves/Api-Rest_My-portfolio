import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  /* CRETE TECH */
  async techCreate(req, res) {
    try {
      const { name, img } = req.body;

      let technology = await prisma.technology_Create.findUnique({
        where: {
          name,
        },
      });

      if (technology) {
        return res.json({ mensager: "nome já existente!" });
      }

      technology = await prisma.technology_Create.create({
        data: {
          name,
          img,
        },
      });

      return res.json(technology);
    } catch (error) {
      return res.json({ error });
    }
  },

  /* FIND ALL  */
  async findAlltech(req, res) {
    try {
      const tecnologi = await prisma.Technology_Create.findMany();
      return res.json({ tecnologi });
    } catch (error) {
      return res.json(error);
    }
  },
  /* FIND ONE  */
  async findtech(req, res) {
    const { id } = req.params;
    const tecnologi = await prisma.Technology_Create.findMany({
      where: { id: String(id) },
    });

    if (!tecnologi) {
      return res.json({ mensager: "id não encontrado" });
    }

    return res.json({ tecnologi });
  },
  /* UPDATE */
  async Updatetech(req, res) {
    try {
      const { id } = req.params;
      const { name, img } = req.body;
      
      const technology = await prisma.technology_Create.findUnique({
        where: { id: String(id) },
      });

      if (!technology) {
        return res.json({ mensager: "id não encontrado" });
      }

      technology = await prisma.technology_Create.update({
        where: { id: String(id) },
        data: {
          name,
          img,
        },
      });

      return res.json(technology);
    } catch (error) {
      return res.json(error);
    }
  },

  /* DELETE */
  async deleteTech(req, res) {
    try {
      const { id } = req.params;
      const tecnologi = await prisma.technology_Create.findUnique({
        where: { id: String(id) },
      });

      if (!tecnologi) {
        return res.json({ mensager: "id não encontrado" });
      }

      tecnologi = await prisma.technology_Create.delete({
        where: { id: String(id) },
      });

      return res.json({ message: "tecnologia excluida com sucesso!" });
    } catch (error) {
      return res.json({ error });
    }
  },
};
