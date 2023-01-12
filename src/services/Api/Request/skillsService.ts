// import { AxiosResponse } from "axios";
// import { Api } from "../api";

// const getAll = (name: string) => {
//     return Api.get(`/api/skills/${name}`);
// };

// const skillsService = {
//     getAll,
// };
// export default skillsService;

import axios from "axios";

export default {
  getData: () =>
    axios({
      method: "GET",
      url: "http://107.178.219.190:8080/api/skills",
      // 'headers': {
      //     'content-type':'application/octet-stream',
      // },
      params: {
        search: "parameter",
      },
    }),
};


