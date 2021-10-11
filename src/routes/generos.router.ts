import { Router } from "express";
import { GeneroController } from "../controllers/genero-controller";
import { Token } from "../token";
const router = Router()
const controller:GeneroController = new GeneroController()
const token:Token = new Token()
router.get('/',token.verifyToken,controller.getAll)

export default router