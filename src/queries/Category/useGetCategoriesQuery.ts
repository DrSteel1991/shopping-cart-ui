import { getCategories } from "@/apiClients/CategoriesClient";
import { useQuery } from "@tanstack/react-query";

export interface useGetCategoriesQueryResponseSuccess {
  count: number;
  categories: {
    id: string;
    name: string;
    slug: string;
    description: string;
    parent: string | null;
  }[];
}

export const useGetCategoriesQuery = () => {
  const { data, isLoading, error } =
    useQuery<useGetCategoriesQueryResponseSuccess>({
      queryKey: ["categories"],
      queryFn: () => getCategories(),
    });

  return { data, isLoading, error };
};
