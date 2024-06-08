import { Router } from "express";
import { AcademicFacultyControllers } from "./academicFaculty.controller";
import { validationRequest } from "../../app/middleware/validationRequest";
import { AcademicFacultyValidation } from "./academicFaculty.validation";


const router = Router()

router.post('/create-academic-faculty',
validationRequest(AcademicFacultyValidation.AcademicFacultyValidationSchema),
AcademicFacultyControllers.createAcademicFaculty)
router.get('/',AcademicFacultyControllers.getAllAcademicFaculty)
router.get("/:id",AcademicFacultyControllers.getAcademicFacultyById)
router.put("/:id",AcademicFacultyControllers.updateAcademicFacultyById)

export const AcademicFacultyRoute = router