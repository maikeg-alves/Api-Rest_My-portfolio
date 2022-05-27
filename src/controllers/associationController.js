import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  /* CREATE */
  async createAssociation(req, res) {
    try {
      const {
        name_project,
        date_create_project,
        description,
        linkrepo,
        executiontime,
        difficulty,
        img,
        gif,
        id_technology,
      } = req.body;

      const project = await prisma.technology.create({
        data: {
          project: {
            create: {
              name_project,
              date_create_project,
              description,
              linkrepo,
              executiontime,
              difficulty,
              img,
              gif,
            },
          },
          technology: {
            connect: {  
              id: id_technology,
            },
          },
        },
      });

      return res.json(project);
    } catch (error) {
      return res.json(error);
    }
  },
  /* FIND ALL */
  async findAllAssociation(req, res) {
    try {
      const project = await prisma.Technology.findMany({
        select: {
          id: true,
          id_project: true,
          id_technology: false,
          technology: true,
        },
      });
      return res.json({ project });
    } catch (error) {
      return res.json({ error });
    }
  },
  /* FIND ONE */
  async findOneAssociation(req, res) {
    const { id } = req.params;
    const association = await prisma.technology.findMany({
      where: { id: String(id) },
    });
    if (!association) {
      return res.json({ mensager: "id não encontrado" });
    }
    return res.json({ association });
  },
  /* DELETE */
  async deleteAssociation(req, res) {
    try {
      const { id } = req.params;
      const association = await prisma.technology.findMany({
        where: { id: String(id) },
      });

      if (!association) {
        return res.json({ mensager: "id não encontrado" });
      }

      association = await prisma.technology.delete({
        where: { id: String(id) },
      });

      return res.json({ message: "associação excluida com sucesso!" });
    } catch (error) {
      return res.json(error);
    }
  },
};
