import { AxiosResponse } from "axios";
import { Api } from "../api";
import ISkillData from "./ISkills";

const getAll = () => {
  return Api.get<Array<ISkillData>>("/skills");
};

const get = (id: any) => {
  return Api.get<ISkillData>("/skills/${id}");
};

const SkillData = {
  getAll,
  get,
};

export default SkillData;

// import { AxiosResponse } from "axios";
// import { Api } from "../api";

// const getAll = (name: string) => {
//     return Api.get(`/api/skills/${name}`);
// };

// const skillsService = {
//     getAll,
// };
// export default skillsService;

// import axios from "axios";

// export default {
//   getData: () =>
//     axios({
//       method: "GET",
//       url: "http://107.178.219.190:8080/api/skills",
//       // 'headers': {
//       //     'content-type':'application/octet-stream',
//       // },
//       params: {
//         search: "parameter",
//       },
//     }),
// };
