import { z } from "zod";

const AcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Academic Department must be string",
      required_error: "Name is required",
    }),
    academicFaculty: z.string({
      invalid_type_error: "Academic Department must be string",
      required_error: "Faculty is required",
    }),
  }),
});

export const AcademicDepartmentValidation={
    AcademicDepartmentValidationSchema
}
