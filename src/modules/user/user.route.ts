import express from "express";
import { UserControllers } from "./user.controller";
import {  studentValidations } from "../student/student.validation";

import { validationRequest } from "../../app/middleware/validationRequest";
import { FacultyValidation } from "../faculty/faculty.validation";
import { AdminValidation } from "../admin/admin.validation";
const router = express.Router();



router.post(
  "/create-student",validationRequest(studentValidations.createStudentValidationSchema),UserControllers.createStudent
);
router.post(
  "/create-faculty",validationRequest(FacultyValidation.FacultySchemaValidation),UserControllers.createFaculty
);
router.post(
  "/create-admin",validationRequest(AdminValidation.createAdminValidationSchema),UserControllers.createAdmin
);
router.get(
  "/",UserControllers.getAllUser
);

export const userRoute = router;
