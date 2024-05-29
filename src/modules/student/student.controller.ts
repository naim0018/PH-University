import { NextFunction, Request, RequestHandler, Response } from "express";
import { StudentService } from "./student.service";
import { StatusCodes } from "http-status-codes";
import { sendResponse } from "../../app/utils/sendResponse";
import { catchAsync } from "../../app/utils/catchAsync";



const getAllStudent = catchAsync(async (req, res) => {
  const result = await StudentService.getAllStudentData();

  sendResponse(res, {
    status: StatusCodes.OK,
    success: true,
    message: "All student retrieve successful",
    data: result,
  });
});
const getStudentById = catchAsync(
  async (req, res ) => {
    const { id } = req.params;
    const result = await StudentService.getStudentDataById(id);

    sendResponse(res, {
      status: StatusCodes.OK,
      success: true,
      message: "Find by id successful",
      data: result,
    });
  }
);

export const StudentController = {
  getAllStudent,
  getStudentById,
};
 