import { Router } from "express";
import { DireccionesController } from "../controllers/direcciones.controller";

const router = Router();
const controller: DireccionesController = new DireccionesController();
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
