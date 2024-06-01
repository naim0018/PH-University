import { Schema, Types, model } from "mongoose"

const academicDepartmentSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    academicFaculty:{
        type:Schema.Types.ObjectId,
        ref:"AcademicFacultyModel"
    },

},
{
    timestamps:true
}
)

export const AcademicDepartmentModel = model("AcademicDepartment",academicDepartmentSchema)