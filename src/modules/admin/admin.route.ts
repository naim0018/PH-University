import { Router } from "express"
import { AdminController } from "./admin.controller"
import { validationRequest } from "../../app/middleware/validationRequest"
import { AdminValidation } from "./admin.validation"

const router = Router()

router.get('/',AdminController.getAllAdmin)
router.get('/:adminId',AdminController.getAdminById)
router.patch('/:adminId',validationRequest(AdminValidation.updateAdminValidationSchema),AdminController.updateAdminById)
router.delete('/:adminId',AdminController.deleteAdminById)

export const AdminRoute = router