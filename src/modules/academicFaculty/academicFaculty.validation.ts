import { z } from "zod";


const AcademicFacultyValidationSchema = z.object({
    body:z.object({
        name:z.string().max(30,"Name cannot be more then 20 character")
    })
})

export const AcademicFacultyValidation = {
    AcademicFacultyValidationSchema
}

