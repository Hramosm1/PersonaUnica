import { Router } from "express";
import { EmpleosController } from "../controllers/empleos.controller";

const router = Router();
const controller: EmpleosController = new EmpleosController();
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
