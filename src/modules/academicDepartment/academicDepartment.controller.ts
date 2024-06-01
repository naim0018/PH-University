import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../app/utils/catchAsync";
import { sendResponse } from "../../app/utils/sendResponse";
import { AcademicDepartmentService } from "./academicDepartment.service";

const createAcademicDepartment = catchAsync(async (req, res) => {
    const result = await AcademicDepartmentService.createAcademicDepartmentData(
      req.body
    );
  
    sendResponse(res, {
      status: StatusCodes.OK,
      success: true,
      message: "Academic Faculty created successfully",
      data: result,
    });
  });
  
  const getAllAcademicDepartment = catchAsync(async (req, res) => {
    const result = await AcademicDepartmentService.getAllAcademicDepartmentData();
  
    sendResponse(res, {
      status: StatusCodes.OK,
      success: true,
      message: "Academic Faculty fetched successfully",
      data: result,
    });
  });
  const getAcademicDepartmentById = catchAsync(async (req, res) => {
    const result = await AcademicDepartmentService.getAcademicDepartmentDataById(
      req.params.id
    );
  
    sendResponse(res, {
      status: StatusCodes.OK,
      success: true,
      message: "Academic Faculty fetched by id successfully",
      data: result,
    });
  });
  const updateAcademicDepartmentById = catchAsync(async (req, res) => {
    const result = await AcademicDepartmentService.updateAcademicDepartmentData(req.params.id,req.body);
  
    sendResponse(res, {
      status: StatusCodes.OK,
      success: true,
      message: "Academic Department updated successfully",
      data: result,
    });
  });
  
  export const AcademicDepartmentControllers = {
    createAcademicDepartment,
    getAllAcademicDepartment,
    updateAcademicDepartmentById,
    getAcademicDepartmentById,
  };
  