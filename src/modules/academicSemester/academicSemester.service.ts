import { academicSemesterCodeMapper } from "./academicSemester.constant"
import { TAcademicSemester } from "./academicSemester.interface"
import { AcademicSemesterModel } from "./academicSemester.model"


const createAcademicSemesterData =async(payload:TAcademicSemester)=>{
    if(academicSemesterCodeMapper[payload.name] !== payload.code){
        throw new Error("Invalid Semester Code")
    }
    const result = await AcademicSemesterModel.create(payload)
    return result
}

const getAllAcademicSemesterData = async()=>{
    const result = await AcademicSemesterModel.find()
    return result
}
const getAcademicSemesterDataById = async(id:string)=>{
    const result = await AcademicSemesterModel.findById(id)
    return result
}
const updateAcademicSemesterDataById = async(id:string,payload:TAcademicSemester)=>{
    if(academicSemesterCodeMapper[payload.name] !== payload.code){
        throw new Error("Invalid Semester Code")
    }
    const result = await AcademicSemesterModel.findByIdAndUpdate(id,payload,{new:true})
    return result
}

export const AcademicSemesterServices ={
    createAcademicSemesterData,
    getAllAcademicSemesterData,
    getAcademicSemesterDataById,
    updateAcademicSemesterDataById,
}