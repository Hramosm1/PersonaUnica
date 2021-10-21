import { Router } from "express";
import { ReferenciasWebController } from "../controllers/referenciasWeb.controller";

const router = Router();
const controller: ReferenciasWebController = new ReferenciasWebController();
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
