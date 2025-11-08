import { createContext } from "react";
import type { usePostLoginUserQueryResponseSuccess } from "@/queries/User/usePostLoginUserQuery";

export interface AuthContextType {
  user: usePostLoginUserQueryResponseSuccess["user"] | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (data: usePostLoginUserQueryResponseSuccess) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

