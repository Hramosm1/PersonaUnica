import { Router } from "express";
import { EmpresasController } from "../controllers/empresas-controller";
const router = Router()
const controller:EmpresasController = new EmpresasController()
router.get('/',controller.GetAll)

export default router