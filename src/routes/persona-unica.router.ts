import { Router } from "express";
import { PersonaUnicaController } from "../controllers/persona-unica-controller";
import { Token } from "../token";
const router = Router()
const controller:PersonaUnicaController = new PersonaUnicaController()
const token:Token = new Token()
router.post('/',token.verifyToken,controller.postData)

export default router