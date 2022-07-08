import { Router } from "express";
import { PersonaUnicaController } from "../controllers/persona-unica-controller";
import { Token } from "../token";
const router = Router();
const controller: PersonaUnicaController = new PersonaUnicaController();
const token: Token = new Token();
router.get("/:take/:page", controller.getAll);
router.get("/:id", token.verifyToken, controller.getOne);
router.post("/", token.verifyToken, controller.postData);
router.put("/:id", token.verifyToken, controller.updatePerfil);

export default router;
