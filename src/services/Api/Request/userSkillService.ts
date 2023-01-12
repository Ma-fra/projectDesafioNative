import { AxiosResponse } from "axios";
import { Api } from "../api";
import ISkillData from "./ISkills";

const getAll = () => {
  return Api.get<Array<ISkillData>>("/userSkills");
};

const get = (id: any) => {
  return Api.get<ISkillData>("/userSkills/${id}");
};

const create = (data: ISkillData) => {
  return Api.post<ISkillData>("/userSkills", data);
};

const update = (id: any, data: ISkillData) => {
  return Api.put<any>("/userSkills/${id}", data);
};

const remove = (id: any) => {
  return Api.delete<any>("/userSkills/${id}");
};

const removeAll = () => {
  return Api.delete<any>("/userSkills");
};

const UserSkillData = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};

export default UserSkillData;
