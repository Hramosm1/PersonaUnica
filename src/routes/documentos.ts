import { Router } from "express";
import { DocumentosController } from "../controllers/documentos.controller";

const router = Router();
const controller: DocumentosController = new DocumentosController();
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
