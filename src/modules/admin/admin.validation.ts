import { z } from "zod";


const createAdminValidationSchema = z.object({
    body:z.object({
        name:z.string()
    })
})
const updateAdminValidationSchema = z.object({
    body:z.object({
        name:z.string().optional()
    })
})

export const AdminValidation={
    createAdminValidationSchema,
    updateAdminValidationSchema
}
