import { Router } from "express";
import { validationRequest } from "../../app/middleware/validationRequest";
import { FacultyValidation } from "./faculty.validation";
import { FacultyController } from "./faculty.controller";


const router = Router()

router.get('/',FacultyController.getAllFaculty)
router.get('/:facultyId',FacultyController.getFacultyById)
router.patch('/:facultyId',validationRequest(FacultyValidation.UpdateFacultySchemaValidation),FacultyController.updateFacultyById)
router.delete('/:facultyId',FacultyController.deleteFacultyById)

export const FacultyRoute = router