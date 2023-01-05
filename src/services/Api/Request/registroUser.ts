import { AxiosResponse } from "axios";
import { Api } from "../api";

export interface RegistroUser {
    id?: number;
    login: string;
    password: string;
}

export function postUser(
    user: RegistroUser
): Promise<AxiosResponse<RegistroUser, any>> {
    let url = `/api/users`;

    return Api.post(url, user);
}