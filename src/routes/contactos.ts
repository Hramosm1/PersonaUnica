import { Router } from "express";
import { ContactosController } from "../controllers/contactos.controller";

const router = Router();
const controller: ContactosController = new ContactosController();
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
