import {
  useGetCategoriesQuery,
  type useGetCategoriesQueryResponseSuccess,
} from "@/queries/Category/useGetCategoriesQuery";
import FlexDiv from "@/ui/FlexDiv/FlexDiv";
import { useMemo } from "react";
import type { Category, CategoryWithChildren } from "@/pages/Dashboard/types";
import Checkbox from "@/ui/Checkbox/Checkbox";
import styled from "styled-components";

const CategoriesTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #495057;
  margin: 0;
`;

const StyledSubCategoryName = styled.h5`
  font-size: 14px;
  color: #495057;
  margin: 0;
`;

const StyledCategoryName = styled.span<{ $isParent?: boolean }>`
  font-size: 14px;
  font-weight: ${(props) => (props.$isParent ? 500 : 400)};
  color: #495057;
  cursor: ${(props) => (props.$isParent ? "default" : "pointer")};
`;

interface Props {
  setSelectedCategoryId: (categoryId: string) => void;
  selectedCategoryId: string | null;
}

const DashboardCategories = ({
  setSelectedCategoryId,
  selectedCategoryId,
}: Props) => {
  const {
    data,
    isLoading: isLoadingCategories,
    error: errorCategories,
  } = useGetCategoriesQuery();

  const categoriesWithChildren = useMemo(() => {
    if (!data) return [];

    const categoriesArray: useGetCategoriesQueryResponseSuccess["categories"] =
      data.categories || [];

    const parentCategories = categoriesArray.filter(
      (category: Category) => category.parent === null
    );

    const childrenByParent = categoriesArray.reduce(
      (acc: Record<string, Category[]>, category: Category) => {
        if (category.parent) {
          if (!acc[category.parent]) {
            acc[category.parent] = [];
          }
          acc[category.parent].push(category);
        }
        return acc;
      },
      {}
    );

    return parentCategories.map((parent: Category) => ({
      ...parent,
      children: childrenByParent[parent.id] || [],
    })) as CategoryWithChildren[];
  }, [data]);

  if (isLoadingCategories) {
    return (
      <FlexDiv direction="column" basis={3}>
        <h2>Loading categories...</h2>
      </FlexDiv>
    );
  }

  if (errorCategories) {
    return (
      <FlexDiv direction="column" basis={3}>
        <h2>Error loading categories: {errorCategories.message}</h2>
      </FlexDiv>
    );
  }

  return (
    <FlexDiv direction="column" basis={3} gap={2}>
      <CategoriesTitle>CATEGORIES</CategoriesTitle>
      <FlexDiv direction="column" gap={1.5}>
        {categoriesWithChildren.map((category: CategoryWithChildren) => (
          <FlexDiv key={category.id} direction="column" gap={1}>
            <FlexDiv direction="row" gap={1} alignItems="center">
              <StyledSubCategoryName>{category.name}</StyledSubCategoryName>
            </FlexDiv>
            {category.children.length > 0 && (
              <FlexDiv direction="column" gap={1} ml={3}>
                {category.children.map((child: Category) => (
                  <FlexDiv
                    key={child.id}
                    direction="row"
                    gap={1}
                    alignItems="center"
                  >
                    <Checkbox
                      checked={selectedCategoryId === child.id}
                      onChange={() => setSelectedCategoryId(child.id)}
                      value={child.id}
                    />
                    <StyledCategoryName
                      onClick={() => setSelectedCategoryId(child.id)}
                    >
                      {child.name}
                    </StyledCategoryName>
                  </FlexDiv>
                ))}
              </FlexDiv>
            )}
          </FlexDiv>
        ))}
      </FlexDiv>
    </FlexDiv>
  );
};

export default DashboardCategories;
