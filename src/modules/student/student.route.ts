import express from 'express'
import { StudentController } from './student.controller';
import { validationRequest } from '../../app/middleware/validationRequest';
import { studentValidations } from './student.validation';

const router = express.Router()




router.get('/', StudentController.getAllStudent);

router.get('/:studentId', StudentController.getStudentById);
router.delete('/:studentId', StudentController.deleteStudentById);
router.patch('/:studentId',validationRequest(studentValidations.updateStudentValidationSchema), StudentController.updateStudentById);

export const StudentRoutes = router;
