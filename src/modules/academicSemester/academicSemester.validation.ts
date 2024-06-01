import { z } from "zod"
import { Code, Months, Name } from "./academicSemester.constant"




const academicSemesterValidationSchema = z.object({
   body:z.object({
    name:z.enum([...Name] as [string, ...string[]]),
    code:z.enum([...Code]as [string,...string[]]),
    year:z.string(),
    startMonth:z.enum([...Months] as [string,...string[]]),
    endMonth:z.enum([...Months] as [string,...string[]])
   })

})


export const academicSemesterValidation ={
    academicSemesterValidationSchema
}