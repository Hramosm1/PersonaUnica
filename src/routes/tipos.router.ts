import { Router } from "express";
import { TiposController } from "../controllers/tipos.controller";
import { Token } from "../token";
const router = Router();
const controller: TiposController = new TiposController();
const token: Token = new Token();
router.get("/genero", token.verifyToken, controller.getGeneros);
router.get("/contacto", token.verifyToken, controller.getTIpoContacto);
router.get("/documento", token.verifyToken, controller.getTipoDocumento);
router.get("/origen", token.verifyToken, controller.getTipoOrigen);
router.get("/pagina", token.verifyToken, controller.getTipoPaginaWeb);
router.get("/persona", token.verifyToken, controller.getTipoPersona);
router.get("/telefono", token.verifyToken, controller.getTipoTelefono);

export default router;
