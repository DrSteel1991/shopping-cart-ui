import type { useGetCategoriesQueryResponseSuccess } from "@/queries/Category/useGetCategoriesQuery";
import AxiosClient from "./AxiosClient";

const CategoriesClient = AxiosClient("/api");

export const getCategories =
  async (): Promise<useGetCategoriesQueryResponseSuccess> => {
    const response =
      await CategoriesClient.get<useGetCategoriesQueryResponseSuccess>(
        "/categories"
      );
    return response.data;
  };
