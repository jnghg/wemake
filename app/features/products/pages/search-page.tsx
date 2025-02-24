import type { Route } from "./+types/search-page";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "제품 검색 | Product" },
    { name: "description", content: "제품을 검색해보세요" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";

  return {
    query,
    searchResults: [],
  };
}

export default function SearchPage({ loaderData }: Route.ComponentProps) {
  const { query, searchResults } = loaderData;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">검색 결과</h1>
      {/* 검색 결과 구현 */}
    </main>
  );
}
