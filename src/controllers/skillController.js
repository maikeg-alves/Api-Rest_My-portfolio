import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  /* CREATE */
  async skillCreate(req, res) {
    try {
      const { name, description, ability, goodhabits, experience } = req.body;

      let skill = await prisma.skill.findUnique({
        where: {
          name
        },
      });

      if (skill) {
        return res.json({ mensager: "nome já existente!" });
      }

      skill = await prisma.skill.create({
        data: {
          name,
          description,
          ability,
          goodhabits,
          experience,
        },
      });

      return res.json(skill);
    } catch (error) {
      return res.json({ error });
    }
  },
  /* FIND ALL */
  async findAllSkill(req, res) {

      const skill = await prisma.skill.findMany();
      return res.json(skill)

  },
  /* FIND ONE */
  async findOneSkill(req, res) {
    try {
      const { id } = req.params;
      const skill = await prisma.skill.findMany({
        where: { id: String(id) },
      });

      if (!skill) {
        return res.json({ error: "id não encontrado" });
      }

      return res.json(skill);
    } catch (error) {
      return  res.json( error );
    }
  },
  /* UPDATE */
  async UpdateSkill( req, res) {
    try {
      const { id } = req.params;
      const { name, description, ability, goodhabits, experience } = req.body;
      
      const skill = await prisma.skill.findUnique({
        where: { id: String(id) },
      });

      if (!skill) {
        return res.json({ mensager: "id não encontrado" });
      }

      skill = await prisma.skill.update({
        where: { id: String(id) },
        data: {
          name,
          description,
          ability,
          goodhabits,
          experience,
        },
      });

      return res.json(skill);
    } catch (error) {
      return res.json(error);
    }
  },
  /* DELETE */
  async deleteSkill(req, res) {
    try {
      const { id } = req.params;
      const skill = await prisma.skill.findMany({ where: { id: String(id) } });
      if (!skill) {
        return res.json({ error: "id não encontrado" });
      }
      skill = await prisma.skill.delete({
        where: {
          id: String(id),
        },
      });

      return res.json({mensager: "skill deletada com sucesso!"});
    } catch (error) {
      return  res.json( error );
    }
  }
};
