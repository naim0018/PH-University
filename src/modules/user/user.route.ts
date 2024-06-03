import express from "express";
import { UserControllers } from "./user.controller";
import {  studentValidations } from "../student/student.validation";

import { validationRequest } from "../../app/middleware/validationRequest";
const router = express.Router();



router.post(
  "/create-student",validationRequest(studentValidations.createStudentValidationSchema),UserControllers.createStudent
);
router.get(
  "/",UserControllers.getAllStudent
);

export const userRoute = router;
