import { Router } from "express";
import { AcademicSemesterControllers } from "./academicSemester.controller";
import { validationRequest } from "../../app/middleware/validationRequest";
import { academicSemesterValidation } from "./academicSemester.validation";


const router = Router()

router.post('/create-academic-semester',validationRequest(academicSemesterValidation.academicSemesterValidationSchema),AcademicSemesterControllers.createAcademicSemester)


export const AcademicSemesterRoutes = router