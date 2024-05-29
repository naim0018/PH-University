
import { StudentModel } from "./student.model";


const getAllStudentData = async()=>{
    const result = await StudentModel.find()
    return result
}
const getStudentDataById = async(id:string)=>{
    const result = await StudentModel.findById(id)
    return result
}

export const StudentService={
  
    getAllStudentData,
    getStudentDataById
}