import { Schema, model } from "mongoose";

const AcademicFacultySchema = new Schema({
    name:{
        type:String,
        required:true,
    }
})

export const AcademicFacultyModel = model('AcademicFaculty',AcademicFacultySchema)