import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/categories-page";
import type { MetaFunction } from "react-router";

import { CategoryCard } from "../components/category-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Categories | Product" },
    { name: "description", content: "Categories of products" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    categories: [],
  };
}

export default function CategoriesPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <Hero title="Categories" subtitle="Categories of products" />

      <div className="grid grid-cols-4 gap-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <CategoryCard
            key={index}
            id={`categoryId-${index}`}
            name="Category Name"
            description="Category Description"
          />
        ))}
      </div>
    </div>
  );
}
