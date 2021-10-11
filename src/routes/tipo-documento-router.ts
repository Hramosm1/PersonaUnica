import { Router } from "express";
import { TipoDocumentoController } from "../controllers/tipo-documento-controller";
import { Token } from "../token";
const router = Router()
const controller:TipoDocumentoController = new TipoDocumentoController()
const token:Token = new Token()
router.get('/',token.verifyToken,controller.getAll)

export default router