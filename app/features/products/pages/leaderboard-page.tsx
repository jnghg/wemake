import type { MetaFunction } from "react-router";
import type { Route } from "./+types/leaderboard-page";

export const meta: MetaFunction = () => {
  return [
    { title: "리더보드 | Product" },
    { name: "description", content: "인기 제품 순위를 확인하세요" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {
    topProducts: [],
  };
}

export default function LeaderboardPage({ loaderData }: Route.ComponentProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">리더보드</h1>
      {/* 리더보드 구현 */}
    </main>
  );
}
