import type { useGetCategoriesQueryResponseSuccess } from "@/queries/Category/useGetCategoriesQuery";
import type { useGetProductsQueryResponseSuccess } from "@/queries/Product/useGetProductsQuery";

export type Category = useGetCategoriesQueryResponseSuccess["categories"][0];

export type Product = useGetProductsQueryResponseSuccess["products"][0];

export interface CategoryWithChildren extends Category {
  children: Category[];
}
