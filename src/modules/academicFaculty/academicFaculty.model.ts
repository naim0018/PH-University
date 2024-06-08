import { Schema, model } from "mongoose";
import { AppError } from "../../app/errors/AppError";
import { StatusCodes } from "http-status-codes";
import { TAcademicFaculty } from "./academicFaculty.interface";

const AcademicFacultySchema = new Schema<TAcademicFaculty>({
    name:{
        type:String,
        required:true,
    }
})

AcademicFacultySchema.pre("save",async function(next){
    const isExist = await AcademicFacultyModel.find({
        name:this.name
    })
    if(isExist){
        throw new AppError(StatusCodes.BAD_REQUEST,"Faculty already exist")
    }
})

export const AcademicFacultyModel = model('AcademicFaculty',AcademicFacultySchema)