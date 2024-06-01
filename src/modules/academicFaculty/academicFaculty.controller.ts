import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../app/utils/catchAsync";
import { sendResponse } from "../../app/utils/sendResponse";
import { AcademicFacultyService } from "./academicFaculty.service";

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.createAcademicFacultyData(
    req.body
  );

  sendResponse(res, {
    status: StatusCodes.OK,
    success: true,
    message: "Academic Faculty created successfully",
    data: result,
  });
});

const getAllAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.getAllAcademicFacultyData();

  sendResponse(res, {
    status: StatusCodes.OK,
    success: true,
    message: "Academic Faculty fetched successfully",
    data: result,
  });
});
const getAcademicFacultyById = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.getAcademicFacultyDataById(
    req.params.id
  );

  sendResponse(res, {
    status: StatusCodes.OK,
    success: true,
    message: "Academic Faculty fetched by id successfully",
    data: result,
  });
});
const updateAcademicFacultyById = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.updateAcademicFacultyData(req.params.id,req.body);

  sendResponse(res, {
    status: StatusCodes.OK,
    success: true,
    message: "Academic Faculty updated successfully",
    data: result,
  });
});

export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  updateAcademicFacultyById,
  getAcademicFacultyById,
};
