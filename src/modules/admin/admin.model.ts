import { Schema,  model } from "mongoose";
import { TAdmin } from "./admin.interface";

const AdminSchema = new Schema<TAdmin>({
    id:{
        type:String,
        required:true,
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    designation:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:['male','female','other'],
        required:true
    },
    dateOfBirth:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        required:true
    },
    emergencyContactNo:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        enum :["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required:true
    },
    presentAddress:{
        type:String,
        required:true
    },
    permanentAddress:{
        type:String,
        required:true
    },
    profileImg:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        required:true
    },

},{
    timestamps:true,
})

export const AdminModel = model('Admin',AdminSchema)