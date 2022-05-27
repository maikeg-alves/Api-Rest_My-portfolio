import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  /* CREATE*/
  async CreteProject(req, res) {
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
      } = req.body;

      const project = await prisma.project.findUnique({
        where: {
          name_project,
        },
      });

      if (project) {
        return res.json({
          mensager: "nome de projeto existente",
        });
      }

      project = await prisma.project.create({
        data: {
          name_project,
          date_create_project,
          description,
          linkrepo,
          executiontime,
          difficulty,
          img,
          gif
        },
      });

      return res.json(project);
    } catch (error) {
      return res.json({ error });
    }
  },

  /* FIND ALL  */
  async findAllProjects(req, res) {
    try {
      const project = await prisma.project.findMany({
        include: {
          technologys: true,
        },
      });
      return res.json({ project });
    } catch (error) {
      return res.json({ error });
    }
  },

  /* FIND ONE */
  async findProject(req, res) {
    const { id } = req.params;
    const project = await prisma.project.findMany({
      where: { id: String(id) },
    });

    if (project) {
      return res.json({ mensager: "id não encontrado" });
    }

    return res.json({ project });
  },

  /* UPDATE */
  async UpdateProject(req, res) {
    try {
      const { id } = req.params;
      const {
        name_project,
        date_create_project,
        description,
        linkrepo,
        executiontime,
        difficulty,
        img,
        gif,
      } = req.body;

      let project = await prisma.project.findMany({
        where: { id: String(id) },
      });

      if (!project) {
        return res.json({ mensager: "id não encontrado" });
      }

      project = await prisma.project.update({
        where: { id: String(id) },
        data: {
          name_project,
          date_create_project,
          description,
          linkrepo,
          executiontime,
          difficulty,
          img,
          gif,
        },
      });

      return res.json(project);
    } catch (error) {
      return res.json({ error });
    }
  },

  /* DELETE */
  async deleteProject(req, res) {
    try {
      const { id } = req.params;
      const project = await prisma.project.findMany({ where: { id: String(id) } });
      if (!project) {
        return res.json({ error: "id não encontrado" });
      }
      project = await prisma.project.delete({
        where: {
          id: String(id),
        },
      });

      return res.json({mensager: "Project deletado com sucesso!"});
    } catch (error) {
      return  res.json( error );
    }
  }
};


