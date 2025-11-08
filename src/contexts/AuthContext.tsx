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

  // Initialize from localStorage on mount
  useEffect(() => {
    const storedToken = getStoredToken();
    if (storedToken) {
      setToken(storedToken);
      // Try to get user from query cache
      const cachedUser = queryClient.getQueryData<
        usePostLoginUserQueryResponseSuccess["user"]
      >(["user"]);
      if (cachedUser) {
        setUser(cachedUser);
      }
    }
  }, [queryClient]);

  const login = (data: usePostLoginUserQueryResponseSuccess) => {
    setUser(data.user);
    setToken(data.token);
    setStoredToken(data.token);
    // Also store in query cache for compatibility
    queryClient.setQueryData(["auth", "token"], data.token);
    queryClient.setQueryData(["user", data.user.id], data.user);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setStoredToken(null);
    // Clear query cache
    queryClient.removeQueries({ queryKey: ["auth", "token"] });
    queryClient.removeQueries({ queryKey: ["user"] });
    queryClient.setQueryData(["auth", "token"], null);
  };

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated: !!token && !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
