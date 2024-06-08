import { Types } from "mongoose";
import { z } from "zod";

const NameSchema = z.object({
    firstName: z.string().nonempty({ message: "First name is required" }),
    middleName: z.string().optional(),
    lastName: z.string().nonempty({ message: "Last name is required" }),
  });
  
  
  const FacultySchemaValidation = z.object(
    {
        body:z.object({
           
           
            designation: z.string().nonempty({ message: "Designation is required" }),
            name: NameSchema,
            gender: z.enum(["male", "female", "others"], { message: "Invalid gender" }),
            dateOfBirth: z.string().nonempty({ message: "Date of birth is required" }),
            email: z.string().email({ message: "Invalid email address" }),
            contactNo: z.string().nonempty({ message: "Contact number is required" }),
            emergencyContactNo: z.string().nonempty({ message: "Emergency contact number is required" }),
            bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], { message: "Invalid blood group" }),
            presentAddress: z.string().nonempty({ message: "Present address is required" }),
            permanentAddress: z.string().nonempty({ message: "Permanent address is required" }),
            profileImg: z.string().optional(),
            isDeleted: z.boolean().default(false),
          })
    }
  )

  const UpdateFacultySchemaValidation = z.object({
    id: z.string().optional(),
    user: z.instanceof(Types.ObjectId).optional(),
    designation: z.string().optional(),
    name: NameSchema.partial().optional(),
    gender: z.enum(["male", "female", "others"]).optional(),
    dateOfBirth: z.string().optional(),
    email: z.string().email().optional(),
    contactNo: z.string().optional(),
    emergencyContactNo: z.string().optional(),
    bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).optional(),
    presentAddress: z.string().optional(),
    permanentAddress: z.string().optional(),
    profileImg: z.string().optional(),
    academicDepartment: z.instanceof(Types.ObjectId).optional(),
    isDeleted: z.boolean().optional(),
  });
  export const FacultyValidation = {
    FacultySchemaValidation,
    UpdateFacultySchemaValidation
  }