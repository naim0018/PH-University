import { Model } from "mongoose";

export interface TUser {
  id: string;
  password: string;
  needPasswordChange: boolean;
  role: "admin" | "faculty" | "student";
  status: "in-progress" | "blocked";
  isDeleted: boolean;
}

export interface UserInterfaceModel extends Model<TUser> {
  isUserExistById(id: string): Promise<TUser>;
}
