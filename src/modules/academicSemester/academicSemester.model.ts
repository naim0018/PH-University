import { Schema, model } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";
import { Code, Months, Name } from "./academicSemester.constant";





const academicSemesterSchema = new Schema({
    name: {
        type:String,
        required:true,
        enum:Name
    },
    code:{
        type:String,
        required:true,
        enum:Code
    },
    year:{
        type:String,
        required:true
    },
    startMonth:{
        type:String,
        required:true,
        enum:Months
    },
    endMonth:{
        type:String,
        required:true,
        enum:Months
    }

})


export const AcademicSemesterModel = model<TAcademicSemester>('AcademicSemester',academicSemesterSchema)