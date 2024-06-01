import { TAcademicDepartment } from "./academicDepartment.interface"
import { AcademicDepartmentModel } from "./academicDepartment.model"

const createAcademicDepartmentData=async(payload : TAcademicDepartment)=>{
    const result = await AcademicDepartmentModel.create(payload)
    return result
} 
const getAllAcademicDepartmentData =async ()=>{

    const result = await AcademicDepartmentModel.find()
    return result

}
const getAcademicDepartmentDataById =async (payload:string)=>{

    const result = await AcademicDepartmentModel.findById(payload)
    return result

}
const updateAcademicDepartmentData =async (id:string,payload:TAcademicDepartment)=>{

    const result = await AcademicDepartmentModel.findByIdAndUpdate(id,payload,{new:true})
    return result

}

export const AcademicDepartmentService={
    createAcademicDepartmentData,
    getAllAcademicDepartmentData,
    getAcademicDepartmentDataById,
    updateAcademicDepartmentData
}