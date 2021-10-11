import { Router } from "express";
import { LoginController } from "../controllers/login-controller";
const router = Router()
const controller:LoginController = new LoginController()


router.get('/login',controller.login)
router.get('/logout')
router.get('/login')

export default router