import { AxiosResponse } from "axios";
import { Api } from "../api";

export default interface ISUserSkillData {
  id?: any | null;
  name: string;
  description: string;
  imageUrl: string;
}

const getAll = () => {
  return Api.get<Array<ISUserSkillData>>("/userSkills");
};

const get = (id: any) => {
  return Api.get<ISUserSkillData>("/userSkills/${id}");
};

const create = (data: ISUserSkillData) => {
  return Api.post<ISUserSkillData>("/userSkills", data);
};

const update = (id: any, data: ISUserSkillData) => {
  return Api.put<any>("/userSkills/${id}", data);
};

const remove = (id: any) => {
  return Api.delete<any>("/userSkills/${id}");
};

const removeAll = () => {
  return Api.delete<any>("/userSkills");
};

const ISUserSkillData = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};
