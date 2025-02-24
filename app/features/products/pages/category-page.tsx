import type { Route } from "./+types/category-page";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "카테고리 제품 | Product" },
    { name: "description", content: "카테고리별 제품을 확인하세요" },
  ];
};

export function loader({ request, params }: Route.LoaderArgs) {
  const { category } = params;
  return {
    category,
    products: [],
  };
}

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  const { category } = loaderData;
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{category}</h1>
      {/* 카테고리별 제품 목록 구현 */}
    </main>
  );
}
