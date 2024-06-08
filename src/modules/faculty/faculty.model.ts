import { Schema, Types, model } from "mongoose";

const NameSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  middleName: { type: String, required: false },
  lastName: { type: String, required: true },
},{_id:false});

const FacultySchema: Schema = new Schema({
  id: { type: String, required: true },
  user: { type: Types.ObjectId, ref: "User", required: true },
  designation: { type: String, required: true },
  name: { type: NameSchema, required: true },
  gender: { type: String, enum: ["male", "female", "others"], required: true },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    required: true,
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  profileImg: { type: String, required: false },
  academicDepartment: {
    type: Types.ObjectId,
    ref: "Department",
    required: true,
  },
  isDeleted: { type: Boolean, default: false, required: true },
},
{
    timestamps:true
}
) 

export const FacultyModel = model('Faculty',FacultySchema)
