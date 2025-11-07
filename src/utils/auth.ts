import { useState, useEffect } from "react";
import { QueryClient } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

const TOKEN_STORAGE_KEY = "auth_token";

/**
 * Get the authentication token from localStorage
 */
export const getStoredToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_STORAGE_KEY);
};

/**
 * Set the authentication token in localStorage
 */
export const setStoredToken = (token: string | null): void => {
  if (typeof window === "undefined") return;
  if (token) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
  } else {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  }
};

/**
 * Get the authentication token from the query cache (with localStorage fallback)
 */
export const getAuthToken = (queryClient: QueryClient): string | null => {
  // First try to get from query cache
  const cachedToken = queryClient.getQueryData<string>(["auth", "token"]);
  if (cachedToken) return cachedToken;

  // Fallback to localStorage
  const storedToken = getStoredToken();
  if (storedToken) {
    // Sync it back to cache
    queryClient.setQueryData(["auth", "token"], storedToken);
    return storedToken;
  }

  return null;
};

/**
 * Hook to get the authentication token (reactive)
 */
export const useAuthToken = (): string | null => {
  const queryClient = useQueryClient();
  const [token, setToken] = useState<string | null>(() => {
    // Initialize from localStorage on mount
    const storedToken = getStoredToken();
    if (storedToken) {
      queryClient.setQueryData(["auth", "token"], storedToken);
    }
    return storedToken || getAuthToken(queryClient);
  });

  useEffect(() => {
    // Subscribe to query cache changes
    const unsubscribe = queryClient.getQueryCache().subscribe(() => {
      // Update token state on any cache change
      const currentToken = getAuthToken(queryClient);
      setToken(currentToken);
    });

    // Also sync from localStorage on mount
    const storedToken = getStoredToken();
    if (storedToken && !token) {
      queryClient.setQueryData(["auth", "token"], storedToken);
      setToken(storedToken);
    }

    return unsubscribe;
  }, [queryClient]);

  // Always return the current token from cache/localStorage
  // This ensures we have the latest value even if state hasn't updated yet
  const currentToken = getAuthToken(queryClient);
  return currentToken || token;
};
