import config from "../../app/config"
import { TAcademicSemester } from "../academicSemester/academicSemester.interface"
import { AcademicSemesterModel } from "../academicSemester/academicSemester.model"
import { TStudent } from "../student/student.interface"
import { StudentModel } from "../student/student.model"
import { TUser } from "./user.interface"
import { UserModel } from "./user.model"
import { generateStudentId } from "./user.utils"


const createStudentData=async(password:string,payload:TStudent)=>{
    const user:Partial<TUser> ={}
    
    user.password = password || config.defaultPass as string
    user.role = 'student'
   
   const semester = await AcademicSemesterModel.findById(payload.admissionSemester)


    user.id =  await generateStudentId(semester as TAcademicSemester)

    const result = await UserModel.create(user)
    
    if(Object.keys(result).length)
        {
            payload.id = result.id
            payload.user = result._id

            const newStudent = await StudentModel.create(payload)
            return newStudent
        }
} 

export const UserServices={
    createStudentData
}