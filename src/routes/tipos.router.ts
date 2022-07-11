import { Router } from "express";
import { TiposController } from "../controllers/tipos.controller";
import { Token } from "../token";
const router = Router();
const controller: TiposController = new TiposController();
const token: Token = new Token();
router.get("/genero", controller.getGeneros);
router.get("/contacto", controller.getTIpoContacto);
router.get("/documento", controller.getTipoDocumento);
router.get("/origen", controller.getTipoOrigen);
router.get("/pagina", controller.getTipoPaginaWeb);
router.get("/persona", controller.getTipoPersona);
router.get("/telefono", controller.getTipoTelefono);

export default router;
