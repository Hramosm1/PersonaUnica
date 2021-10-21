import { Router } from "express";
import { NombresController } from "../controllers/nombres.controller";

const router = Router();
const controller: NombresController = new NombresController();
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
