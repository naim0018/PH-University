import { Schema, model } from "mongoose";
import { TStudent } from "./student.interface";

const UserNameSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: String,
  lastName: {
    type: String,
    required: true,
  },
});
const GuardianSchema = new Schema({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});
const LocalGuardianSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const StudentSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: "UserModel",
  },

  name: UserNameSchema,
  gender: ["male", "female", "others"],
  dateOfBirth: String,
  email: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  guardian: GuardianSchema,
  localGuardian: LocalGuardianSchema,
  profileImg: {
    type: String,
    required: true,
  },
  admissionSemester: {
    type: Schema.Types.ObjectId,
    ref: "AcademicSemesterModel",
  },
});

export const StudentModel = model<TStudent>("Student", StudentSchema);
