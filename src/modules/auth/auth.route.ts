import { Router } from "express";
import { validationRequest } from "../../app/middleware/validationRequest";
import { LogInValidation } from "./auth.validation";
import { AuthController } from "./auth.controller";


const router= Router()

router.post('/login',validationRequest(LogInValidation.logInValidationSchema),AuthController.logInUser)


export const AuthRouter= router