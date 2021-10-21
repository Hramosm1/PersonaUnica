import { Router } from "express";
import { TelefonosController } from "../controllers/telefonos.controller";

const router = Router();
const controller: TelefonosController = new TelefonosController();
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
