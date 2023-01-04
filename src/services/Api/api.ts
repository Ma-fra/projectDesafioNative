import axios from "axios";

export const Api = axios.create({
    baseURL: "http://107.178.219.190:8080",
    // headers: {
    //     "Content-Type": "application/json",
    // },
});