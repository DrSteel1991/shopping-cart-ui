import FlexDiv from "@/ui/FlexDiv/FlexDiv";
import type { Product } from "@/pages/Dashboard/types";
import { useGetProductsQuery } from "@/queries/Product/useGetProductsQuery";

interface Props {
  selectedCategoryId: string | null;
}

const DashboardProducts = ({ selectedCategoryId }: Props) => {
  const {
    data: products,
    isLoading: isLoadingProducts,
    error: errorProducts,
  } = useGetProductsQuery({
    params: { categoryId: selectedCategoryId || undefined },
    enabled: !!selectedCategoryId,
  });

  if (isLoadingProducts) {
    return <div>Loading products...</div>;
  }

  if (errorProducts) {
    return <div>Error loading products: {errorProducts.message}</div>;
  }
  return (
    <FlexDiv basis={9} direction="column" flex={1}>
      <h2>Products</h2>
      {products?.products.map((product: Product) => (
        <h4 key={product.id}>{product.name}</h4>
      ))}
    </FlexDiv>
  );
};

export default DashboardProducts;
