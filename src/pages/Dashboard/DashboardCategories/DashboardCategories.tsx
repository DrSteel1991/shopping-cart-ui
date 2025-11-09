import {
  useGetCategoriesQuery,
  type useGetCategoriesQueryResponseSuccess,
} from "@/queries/Category/useGetCategoriesQuery";
import FlexDiv from "@/ui/FlexDiv/FlexDiv";
import { useMemo } from "react";
import type { Category, CategoryWithChildren } from "@/pages/Dashboard/types";
import Checkbox from "@/ui/Checkbox/Checkbox";

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

    setSelectedCategoryId(childrenByParent[parentCategories[0].id][0].id);

    return parentCategories.map((parent: Category) => ({
      ...parent,
      children: childrenByParent[parent.id] || [],
    })) as CategoryWithChildren[];
  }, [data, setSelectedCategoryId]);

  if (isLoadingCategories) {
    return <div>Loading categories...</div>;
  }

  if (errorCategories) {
    return <div>Error loading categories: {errorCategories.message}</div>;
  }

  return (
    <FlexDiv basis={3} direction="column" flex={1} gap={1}>
      <h2>Categories</h2>
      {categoriesWithChildren.map((category: CategoryWithChildren) => (
        <FlexDiv key={category.id} direction="column" gap={0.5} ml={0}>
          <h4>{category.name}</h4>
          {category.children.length > 0 && (
            <FlexDiv direction="column" gap={0.5} ml={2}>
              {category.children.map((child: Category) => (
                <FlexDiv key={child.id} direction="row" gap={0.5} ml={0}>
                  <Checkbox
                    onChange={() => setSelectedCategoryId(child.id)}
                    value={child.id}
                    checked={selectedCategoryId === child.id}
                  />
                  <h5
                    key={child.id}
                    style={{ fontWeight: 400 }}
                    onClick={() => setSelectedCategoryId(child.id)}
                  >
                    {child.name}
                  </h5>
                </FlexDiv>
              ))}
            </FlexDiv>
          )}
        </FlexDiv>
      ))}
    </FlexDiv>
  );
};

export default DashboardCategories;
