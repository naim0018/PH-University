import express from "express";
import { UserControllers } from "./user.controller";
import { createStudentValidationSchema } from "../student/student.validation";

import { validationRequest } from "../../app/middleware/validationRequest";
const router = express.Router();



router.post(
  "/create-student",validationRequest(createStudentValidationSchema),UserControllers.createStudent
);

export const userRoute = router;
