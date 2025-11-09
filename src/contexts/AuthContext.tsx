import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { usePostLoginUserQueryResponseSuccess } from "@/queries/User/usePostLoginUserQuery";
import { getStoredToken, setStoredToken } from "@/utils/auth";
import { AuthContext, type AuthContextType } from "./authContext.types";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const queryClient = useQueryClient();
  const [user, setUser] = useState<
    usePostLoginUserQueryResponseSuccess["user"] | null
  >(null);
  const [token, setToken] = useState<string | null>(() => getStoredToken());

  useEffect(() => {
    const storedToken = getStoredToken();
    if (storedToken) {
      setToken(storedToken);
      queryClient.setQueryData(["auth", "token"], storedToken);

      const cachedUser = queryClient.getQueryData<
        usePostLoginUserQueryResponseSuccess["user"]
      >(["user"]);
      if (cachedUser) {
        setUser(cachedUser);
      } else {
        const storedUser = localStorage.getItem("auth_user");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          queryClient.setQueryData(["user", parsedUser.id], parsedUser);
        }
      }
    }
  }, [queryClient]);

  const login = (data: usePostLoginUserQueryResponseSuccess) => {
    setUser(data.user);
    setToken(data.token);
    setStoredToken(data.token);
    localStorage.setItem("auth_user", JSON.stringify(data.user));
    queryClient.setQueryData(["auth", "token"], data.token);
    queryClient.setQueryData(["user", data.user.id], data.user);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setStoredToken(null);
    localStorage.removeItem("auth_user");
    queryClient.removeQueries({ queryKey: ["auth", "token"] });
    queryClient.removeQueries({ queryKey: ["user"] });
    queryClient.setQueryData(["auth", "token"], null);
  };

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated: !!token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
