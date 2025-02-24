import type { Route } from "./+types/promote-page";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "제품 홍보 | Product" },
    { name: "description", content: "제품을 홍보하세요" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    promotionOptions: [],
  };
}

export function action({ request }: Route.ActionArgs) {
  // 홍보 신청 로직 구현
  return {};
}

export default function PromotePage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const { promotionOptions } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">제품 홍보</h1>
      {/* 홍보 신청 폼 구현 */}
    </main>
  );
}
