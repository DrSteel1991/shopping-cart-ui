import FlexDiv from "@/ui/FlexDiv/FlexDiv";
import type { Product } from "@/pages/Dashboard/types";
import { useGetProductsQuery } from "@/queries/Product/useGetProductsQuery";
import styled from "styled-components";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: #f8f9fa;
`;

const ProductContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ProductCategory = styled.span`
  font-size: 12px;
  color: #6c757d;
  font-weight: 400;
  text-transform: capitalize;
`;

const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #212529;
  margin: 0;
`;

const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #212529;
`;

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

  console.log(products);

  if (!products?.products || products.products.length === 0) {
    return (
      <FlexDiv direction="column" basis={9} gap={2} flex={1}>
        <h2>Products</h2>
        <p>No products found for this category.</p>
      </FlexDiv>
    );
  }

  return (
    <FlexDiv direction="column" basis={9} gap={2} flex={1}>
      <h2>Products</h2>
      <ProductsGrid>
        {products.products.map((product: Product) => (
          <ProductCard key={product.id}>
            <ProductImage src={`Images/${product.images?.[0]}`} />
            <ProductContent>
              <ProductCategory>
                {product.category || "Uncategorized"}
              </ProductCategory>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>
                $
                {product.price !== undefined
                  ? product.price.toFixed(2)
                  : "0.00"}
              </ProductPrice>
            </ProductContent>
          </ProductCard>
        ))}
      </ProductsGrid>
    </FlexDiv>
  );
};

export default DashboardProducts;
