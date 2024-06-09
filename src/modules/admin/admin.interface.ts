import { Types } from "mongoose"


export type TGender= 'male'|'female'|'other'
export type TBloodGroup= 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'

export type TAdmin ={
    id:string,
    user:Types.ObjectId,
    designation:string,
    name:string,
    gender:TGender,
    dateOfBirth:string,
    email:string,
    contactNo:string,
    emergencyContactNo:string,
    bloodGroup:TBloodGroup,
    presentAddress:string,
    permanentAddress:string,
    profileImg:string,
    isDeleted:boolean,
}

