import { TAdmin } from "./admin.interface"
import { AdminModel } from "./admin.model"


const getAllAdminData = async()=>{
    const result = await AdminModel.find()
    return result
}
const getAdminDataById =async(id:string)=>{
   
    const result = await AdminModel.findOne({id})
    return result
}
const updateAdminDataById =async(id:string,payload:TAdmin)=>{
  
    const result = await AdminModel.findOneAndUpdate({id},payload,{new:true})
    return result
}
const deleteAdminDataById =async(id:string)=>{
    const result = await AdminModel.findOneAndUpdate({id},{isDeleted:true},{new:true})
    return result
}

export const AdminService={
    getAllAdminData,
    getAdminDataById,
    updateAdminDataById,
    deleteAdminDataById,

}