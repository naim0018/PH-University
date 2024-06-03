import mongoose from "mongoose";
import config from "../../app/config";
import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { AcademicSemesterModel } from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";
import { generateStudentId } from "./user.utils";
import { AppError } from "../../app/errors/AppError";
import { StatusCodes } from "http-status-codes";

const createStudentData = async (password: string, payload: TStudent) => {
const session = await mongoose.startSession()
const user: Partial<TUser> = {};
user.password = password || (config.defaultPass as string);
user.role = "student";
const semester = await AcademicSemesterModel.findById( payload.academicSemester);
  
  try {
    session.startTransaction()
   
  user.id = await generateStudentId(semester as TAcademicSemester);
    // 1st transaction
    const result = await UserModel.create([user],{session});
    if (!result.length){
        throw new AppError(StatusCodes.BAD_REQUEST,"Failed to create User")
    } 
      payload.id = result[0].id;
      payload.user = result[0]._id;
// 2nd transaction
      const newStudent = await StudentModel.create([payload],{session});

      if(!newStudent.length){
        throw new AppError(StatusCodes.BAD_REQUEST,"Failed to create new student")
      }

      await session.commitTransaction()
      await session.endSession()
      return newStudent;
    
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()

  }
};

const getAllStudentData =async()=>{
    const result = await UserModel.find()
    return result
}

export const UserServices = {
  createStudentData,
  getAllStudentData,
};
