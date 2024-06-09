import { Schema, model } from "mongoose";
import { TUser, UserInterfaceModel } from "./user.interface";
import bcrypt from 'bcrypt'
import config from "../../app/config";

const userSchema = new Schema<TUser , UserInterfaceModel>({
    id:{
        type:String,
        required:true
    },
    password:{
        type:String,
    },
    needPasswordChange:{
        type:Boolean,
        default:true
    },
    role:{
        type:String,
        enum:['admin','faculty','student']
    },
    status:{
        type:String,
        enum:['in-progress','blocked'],
        default:'in-progress'
    },
    isDeleted:{
        type:Boolean,
        default:false,
        
    },
},
{
    timestamps:true
}

)


userSchema.pre('save',async function(next){
    const user = this

    user.password = await bcrypt.hash(user.password,Number(config.bcrypt_salt_rounds))
    next()
})



userSchema.statics.isUserExistById=async function(id:string){
    return await UserModel.findOne({id})
}

export const UserModel = model<TUser,UserInterfaceModel>('User',userSchema)