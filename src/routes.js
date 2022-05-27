import { Router } from "express";

import projectsController from "./controllers/projectsController.js";
import technology_crete_Controller from "./controllers/technology_crete_Controller.js";
import associationController from "./controllers/associationController.js";
import skillController from "./controllers/skillController.js";

const router = Router();

//Criar/Editar/mostrar Projects  ✅ //

router.post("/project", projectsController.CreteProject);

router.get("/projects", projectsController.findAllProjects);

router.get("/project/:id", projectsController.findProject);

router.put("/project/:id", projectsController.UpdateProject);

router.delete("/project/:id", projectsController.deleteProject);

//Criar/Editar e mostrar e Technogys  ✅ //

router.post("/technology", technology_crete_Controller.techCreate);

router.get("/technologys", technology_crete_Controller.findAlltech);

router.get("/technology/:id", technology_crete_Controller.findtech);

router.put("/technology/:id", technology_crete_Controller.Updatetech);

router.delete("/technology/:id", technology_crete_Controller.deleteTech);

/* associa a tecnologias a projetos ✅*/

router.post("/association", associationController.createAssociation);

router.get("/associations", associationController.findAllAssociation);

router.get("/association/:id", associationController.findOneAssociation);

router.delete("/association/:id", associationController.deleteAssociation);


/* SKILLS ✅ */ 

router.post("/skill", skillController.skillCreate);

router.get("/skills", skillController.findAllSkill);

router.get("/skill/:id", skillController.findOneSkill);

router.put("/skill/:id", skillController.UpdateSkill);

router.delete("/skill/:id", skillController.deleteSkill);




export { router };
