import { Schema, model } from "mongoose";

const AdminSchema = new Schema({
    id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },

},{
    timestamps:true,
})

export const AdminModel = model('Admin',AdminSchema)