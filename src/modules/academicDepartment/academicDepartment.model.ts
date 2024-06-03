import { Schema, Types, model } from "mongoose";
import { TAcademicDepartment } from "./academicDepartment.interface";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../../app/errors/AppError";

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: "AcademicFaculty",
    },
  },
  { 
    timestamps: true,
  }
);




academicDepartmentSchema.pre("save", async function (next) {
  const isExist = await AcademicDepartmentModel.findOne({
    name: this.name,
  });
  if (isExist) {
    throw new AppError(404,"This department already exist");
  }
  next();
});

academicDepartmentSchema.pre("findOneAndUpdate", async function (next) {
  const query = this.getQuery();
  const isExist = await AcademicDepartmentModel.findOne(query);
  if (!isExist) {
    throw new AppError(StatusCodes.NOT_FOUND,"This Department dose not exist");
  }
  next();
});

export const AcademicDepartmentModel = model(
  "AcademicDepartment",
  academicDepartmentSchema
);
