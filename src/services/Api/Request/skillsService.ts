import { AxiosResponse } from "axios";
import { Api } from "../api";
export default interface ISkillData {
  id?: any | null;
  name: string;
  description: string;
  imageUrl: string;
}

const getAll = () => {
  return Api.get<Array<ISkillData>>("/skills");
};

const get = (id: any) => {
  return Api.get<ISkillData>("/skills/${id}");
};

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
