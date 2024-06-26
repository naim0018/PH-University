import { TCode, TMonths, TName } from "./academicSemester.interface";

export const Months: TMonths[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const Name: TName[] = ["Autumn", "Summer", "Fall"];
export const Code: TCode[] = ["01", "02", "03"];

export const academicSemesterCodeMapper :{
  [key:string] : string
} ={
  Autumn : "01",
  Summer: "02",
  Fall:"03"
}