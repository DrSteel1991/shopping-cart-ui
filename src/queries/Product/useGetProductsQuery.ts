import { getProducts } from "@/apiClients/productsClient";
import { useQuery } from "@tanstack/react-query";

export interface useGetProductsQueryResponseSuccess {
  count: number;
  products: {
    id: string;
    name: string;
    slug: string;
    description: string;
    images?: string[];
    category?: string;
    price?: number;
  }[];
}
export const productQueryKey = (categoryId?: string) =>
  categoryId ? ["products", categoryId] : ["products"];

export const useGetProductsQuery = ({
  params,
  enabled,
}: {
  params: { categoryId?: string };
  enabled?: boolean;
}) => {
  const { data, isLoading, error } =
    useQuery<useGetProductsQueryResponseSuccess>({
      queryKey: productQueryKey(params.categoryId),
      queryFn: () => getProducts(params.categoryId),
      enabled,
    });

  return { data, isLoading, error };
};
