import AxiosClient from "./AxiosClient";
import { getAuthToken } from "src/utils/auth";
import { QueryClient } from "@tanstack/react-query";

interface LoginData {
  email: string;
  password: string;
}

const UsersClient = AxiosClient("/api");

export const createUsersClient = (queryClient: QueryClient) => {
  return AxiosClient("/api", {
    getToken: () => getAuthToken(queryClient),
  });
};

export const postUserLogin = async (data: LoginData) => {
  const response = await UsersClient.post("/auth/login", data);
  return response.data;
};
