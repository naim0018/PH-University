import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { UserModel } from "./user.model";


const findLastStudentId =async ()=>{
const lastStudent = await UserModel.findOne({
    role:'student'
},{id:1,_id:0}).lean().sort({createdAt:-1})
return lastStudent?.id ? lastStudent.id : undefined
}


export const generateStudentId = async (payload:TAcademicSemester)=>{
    
    const lastStudentId =await findLastStudentId()
    let currentId = "0"

    
    const lastStudentSemesterYear = lastStudentId?.substring(0,4)
    const lastStudentSemesterCode = lastStudentId?.substring(4,6)
    const currentStudentSemesterYear = payload.year
    const currentStudentSemesterCode = payload.code

    if(
        lastStudentId&&
        lastStudentSemesterYear === currentStudentSemesterYear &&
        lastStudentSemesterCode === currentStudentSemesterCode
    ){
        currentId = lastStudentId?.substring(6)
    }
   

 
const incrementId = (parseInt(currentId)+1).toString().padStart(4,'0')
    const result = `${payload?.year}${payload?.code}${incrementId}`
    return result
} 