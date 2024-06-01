import { TAcademicFaculty } from "./academicFaculty.interface"
import { AcademicFacultyModel } from "./academicFaculty.model"

const createAcademicFacultyData=async(payload : TAcademicFaculty)=>{
    const result = await AcademicFacultyModel.create(payload)
    return result
} 
const getAllAcademicFacultyData =async ()=>{

    const result = await AcademicFacultyModel.find()
    return result

}
const getAcademicFacultyDataById =async (payload:string)=>{

    const result = await AcademicFacultyModel.findById(payload)
    return result

}
const updateAcademicFacultyData =async (id:string,payload:TAcademicFaculty)=>{

    const result = await AcademicFacultyModel.findByIdAndUpdate(id,payload,{new:true})
    return result

}

export const AcademicFacultyService={
    createAcademicFacultyData,
    getAllAcademicFacultyData,
    getAcademicFacultyDataById,
    updateAcademicFacultyData
}