import { Router } from "express";
import { AcademicDepartmentControllers } from "./academicDepartment.controller";
import { validationRequest } from "../../app/middleware/validationRequest";
import { AcademicDepartmentValidation } from "./academicDepartment.validation";

const router = Router()

router.get("/",AcademicDepartmentControllers.getAllAcademicDepartment)
router.post("/create-academic-department",validationRequest(AcademicDepartmentValidation.AcademicDepartmentValidationSchema),AcademicDepartmentControllers.createAcademicDepartment)
router.get("/:id",AcademicDepartmentControllers.getAcademicDepartmentById)
router.patch("/:id",validationRequest(AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema),AcademicDepartmentControllers.updateAcademicDepartmentById)

export const AcademicDepartmentRoute = router 