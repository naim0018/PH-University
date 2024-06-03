import { StatusCodes } from "http-status-codes";
import { AppError } from "../../app/errors/AppError";
import { StudentModel } from "./student.model";
import { UserModel } from "../user/user.model";
import { startSession } from "mongoose";
import { TStudent } from "./student.interface";

const getAllStudentData = async () => {
  const result = await StudentModel.find()
    .populate("academicSemester")
    .populate({
      path: "academicDepartment",
      populate: {
        path: "academicFaculty",
        select: "name -_id",
      },
    });
  return result;
};
const getStudentDataById = async (id: string) => {
  const result = await StudentModel.findOne({ id })
    .populate("academicSemester")
    .populate({
      path: "academicDepartment",
      populate: {
        path: "academicFaculty",
        select: "name -_id",
      },
    });
  if (result === null) {
    throw new AppError(StatusCodes.NOT_FOUND, "Student not found");
  }

  return result;
};
const deleteStudentDataById = async (id: string) => {
  const session = await startSession();
  try {
    session.startTransaction();
    const user = await UserModel.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session }
    );

    if (!user && user === null)
      throw new AppError(StatusCodes.NOT_FOUND, "Student not found");

    const student = await StudentModel.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session }
    );

    if (!student && student === null) {
      throw new AppError(StatusCodes.NOT_FOUND, "Student not found");
    }

    await session.commitTransaction();
    await session.endSession();

    return student;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(StatusCodes.BAD_REQUEST, "Failed to delete Student");
  }
};
const updateStudentDataById = async (
  id: string,
  payload: Partial<TStudent>
) => {
  const { name, guardian, localGuardian, ...remainingStudent } = payload;
  const modifiedUpdateData: Record<string, unknown> = { ...remainingStudent };
  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdateData[`name.${key}`] = value;
    }
  }
  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdateData[`guardian.${key}`] = value;
    }
  }
  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdateData[`localGuardian.${key}`] = value;
    }
  }

  const result = await StudentModel.findOneAndUpdate({ id }, modifiedUpdateData, {
    new: true,
  });
  return result;
};

export const StudentService = {
  getAllStudentData,
  getStudentDataById,
  deleteStudentDataById,
  updateStudentDataById,
};
