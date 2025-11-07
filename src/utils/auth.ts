import { QueryClient } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

/**
 * Get the authentication token from the query cache
 */
export const getAuthToken = (queryClient: QueryClient): string | null => {
  const token = queryClient.getQueryData<string>(["auth", "token"]);
  return token || null;
};

/**
 * Hook to get the authentication token
 */
export const useAuthToken = (): string | null => {
  const queryClient = useQueryClient();
  return getAuthToken(queryClient);
};
