import type { Route } from "./+types/submit-page";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "제품 등록 | Product" },
    { name: "description", content: "새로운 제품을 등록하세요" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    categories: [],
  };
}

export function action({ request }: Route.ActionArgs) {
  // 제품 등록 로직 구현
  return {};
}

export default function SubmitPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const { categories } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">제품 등록</h1>
      {/* 제품 등록 폼 구현 */}
    </main>
  );
}
