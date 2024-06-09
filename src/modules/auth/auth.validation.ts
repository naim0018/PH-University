import { z } from "zod";


const logInValidationSchema = z.object({
    body:z.object({
        id:z.string({required_error:"Id is Required"}),
        password:z.string({required_error:"Password is Required"})
    })
})


export const LogInValidation={
    logInValidationSchema
}