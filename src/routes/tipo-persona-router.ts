import { Router } from "express";
import { TipoPersonaController } from "../controllers/tipo-persona-controller";
import { Token } from "../token";
const router = Router()
const controller: TipoPersonaController = new TipoPersonaController()
const token: Token = new Token()
router.get('/', token.verifyToken,controller.getAll)

export default router