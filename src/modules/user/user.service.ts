import mongoose, { startSession } from "mongoose";
import config from "../../app/config";
import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { AcademicSemesterModel } from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";
import { generateFacultyId, generateStudentId } from "./user.utils";
import { AppError } from "../../app/errors/AppError";
import { StatusCodes } from "http-status-codes";
import { FacultyModel } from "../faculty/faculty.model";
import { TAdmin } from "../admin/admin.interface";
import { AdminModel } from "../admin/admin.model";


const createAdminData=async (payload:TAdmin)=>{
  const session =await mongoose.startSession()
  try {
    session.startTransaction()
    const user:Partial<TUser> = {}
    user.role = 'admin';
    user.id =await generateFacultyId("admin");
    user.password = "admin123"
   
    const createUserAdmin = await UserModel.create([user],{session})
   
    if(!createUserAdmin){
      throw new AppError(StatusCodes.BAD_REQUEST,"Failed to create AdminUser")
    }
     payload.id = user.id 
     payload.user=createUserAdmin[0]._id
     const createAdmin = await AdminModel.create([payload],{session})
     if(!createAdmin){
      throw new AppError(StatusCodes.BAD_REQUEST,"Failed to create Admin")
     }  
      
      await session.commitTransaction()
      await session.endSession()
      
      return createAdmin
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw new AppError(StatusCodes.BAD_REQUEST,`${error}`)
  }
}

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
    
  } catch (error : any) {
    await session.abortTransaction()
    await session.endSession()
    throw new Error(error)
  }
};

const createFacultyData = async ( payload: TStudent) => {
  
const session = await mongoose.startSession()
const user: Partial<TUser> = {};
  // console.log(payload)
user.role = "faculty";
  try {
    session.startTransaction()
   
  user.id = await generateFacultyId('faculty');
    // 1st transaction
    const result = await UserModel.create([user],{session});
    if (!result.length){
        throw new AppError(StatusCodes.BAD_REQUEST,"Failed to create FacultyUser")
    }
     
      payload.id = result[0].id
      payload.user = result[0]._id
// 2nd transaction
      const newFaculty = await FacultyModel.create([payload],{session});

      if(!newFaculty.length){
        throw new AppError(StatusCodes.BAD_REQUEST,"Failed to create new Faculty")
      }

      await session.commitTransaction()
      await session.endSession()
      return newFaculty;
    
  } catch (error : any) {
    await session.abortTransaction()
    await session.endSession()
    throw new Error(error)
  }
};


const getAllUserData =async()=>{
    const result = await UserModel.find()
    return result
}

export const UserServices = {
  createStudentData,
  createAdminData,
  createFacultyData,
  getAllUserData,
};
