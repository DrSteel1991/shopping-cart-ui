import axios from "axios";
import type { AxiosInstance } from "axios";

interface AxiosClientOptions {
  getToken?: () => string | null;
}

const AxiosClient = (
  url: string,
  options?: AxiosClientOptions
): AxiosInstance => {
  const instance = axios.create({
    baseURL: url,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      if (options?.getToken) {
        const token = options.getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default AxiosClient;
