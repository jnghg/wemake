import type { Route } from "./+types/weekly-leaderboard-page";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "주간 리더보드 | Product" },
    { name: "description", content: "주간 인기 제품 순위를 확인하세요" },
  ];
};

export function loader({ request, params }: Route.LoaderArgs) {
  const { year, week } = params;
  return {
    year,
    week,
    products: [],
  };
}

export default function WeeklyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const { year, week, products } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {year}년 {week}주차 리더보드
      </h1>
      {/* 주간 리더보드 구현 */}
    </main>
  );
}
