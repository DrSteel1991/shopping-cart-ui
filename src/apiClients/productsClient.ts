import type { useGetProductsQueryResponseSuccess } from "@/queries/Product/useGetProductsQuery";
import AxiosClient from "./AxiosClient";

const ProductsClient = AxiosClient("/api");

export const getProducts = async (
  categoryId?: string
): Promise<useGetProductsQueryResponseSuccess> => {
  const response = await ProductsClient.get<useGetProductsQueryResponseSuccess>(
    `/products${categoryId ? `?categoryId=${categoryId}` : ""}`
  );
  return response.data;
};
