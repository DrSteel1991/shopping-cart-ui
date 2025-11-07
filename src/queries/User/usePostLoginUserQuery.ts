import { useMutation } from "@tanstack/react-query";
import { postUserLogin } from "src/apiClients/UsersClient";

interface LoginData {
  email: string;
  password: string;
}

export interface usePostLoginUserQueryResponseSuccess {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
    phone: string;
  };
}

interface UsePostLoginUserQueryOptions {
  onSuccess?: (data: usePostLoginUserQueryResponseSuccess) => void;
  onError?: (error: Error) => void;
}

export const userQueryKey = (userId?: string) =>
  userId ? ["user", userId] : ["user"];

export const usePostLoginUserQuery = () => {
  const mutation = useMutation<
    usePostLoginUserQueryResponseSuccess,
    Error,
    LoginData
  >({
    mutationKey: ["login", "user"],
    mutationFn: (data: LoginData) => postUserLogin(data),
  });

  const mutationAsync = (
    data: LoginData,
    options?: UsePostLoginUserQueryOptions
  ) => {
    mutation.mutate(data, {
      onSuccess: options?.onSuccess,
      onError: options?.onError,
    });
  };

  return {
    mutationAsync,
  };
};
