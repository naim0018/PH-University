import { TFaculty } from "./faculty.interface"
import { FacultyModel } from "./faculty.model"

const getAllFacultyData = async()=>{
    const result = await FacultyModel.find()
    return result
}
const getFacultyDataById =async(id:string)=>{
   
    const result = await FacultyModel.findOne({id})
    return result
}
const updateFacultyDataById =async(id:string,payload:TFaculty)=>{
  
    const result = await FacultyModel.findOneAndUpdate({id},payload,{new:true})
    return result
}
const deleteFacultyDataById =async(id:string)=>{
    const result = await FacultyModel.findOneAndUpdate({id},{isDeleted:true},{new:true})
    return result
}

export const FacultyService={
    getAllFacultyData,
    getFacultyDataById,
    updateFacultyDataById,
    deleteFacultyDataById,

}