import { Router } from "express";
import { CorreosController } from "../controllers/correos.controller";

const router = Router();
const controller: CorreosController = new CorreosController();
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
