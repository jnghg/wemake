import type { Route } from "./+types/categories-page";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "카테고리 | Product" },
    { name: "description", content: "카테고리별 제품을 둘러보세요" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    categories: [],
  };
}

export default function CategoriesPage({ loaderData }: Route.ComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">카테고리</h1>
      {/* 카테고리 목록 구현 */}
    </main>
  );
}
