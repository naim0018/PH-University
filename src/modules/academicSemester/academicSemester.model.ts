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

 academicSemesterSchema.pre('save',async function(next){
    const isSemesterExist=await AcademicSemesterModel.findOne({
        year:this.year,
        name:this.name,
    })
    if(isSemesterExist ){
        throw new Error("Semester is already exists!")
    }
    next()
 })


export const AcademicSemesterModel = model<TAcademicSemester>('AcademicSemester',academicSemesterSchema)