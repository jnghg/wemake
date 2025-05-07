import { DateTime } from "luxon";
import type { Route } from "./+types/weekly-leaderboard-page";
import {
  data,
  type MetaFunction,
  isRouteErrorResponse,
  Link,
} from "react-router";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import ProductPagination from "~/common/components/product-pagination";

export const meta: MetaFunction = () => {
  return [
    { title: "주간 리더보드 | Product Hunt Korea" },
    { name: "description", content: "주간 인기 제품 순위를 확인하세요" },
  ];
};

const paramsSchema = z.object({
  year: z.coerce.number(),
  week: z.coerce.number(),
});

export const loader = async ({ params }: Route.LoaderArgs) => {
  const { success, data: parseData } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      {
        error_code: "400",
        message: "Invalid date",
      },
      { status: 400 }
    );
  }
  const date = DateTime.fromObject({
    weekYear: parseData.year,
    weekNumber: parseData.week,
  });

  if (!date.isValid) {
    throw data(
      {
        error_code: "400",
        message: "Invalid date",
      },
      { status: 400 }
    );
  }
  const today = DateTime.now().startOf("week");

  if (date > today) {
    throw data(
      {
        message: "Future date",
        error_code: "400",
      },
      { status: 400 }
    );
  }

  return {
    ...parseData,
  };
};

export default function WeeklyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    weekYear: loaderData.year,
    weekNumber: loaderData.week,
  });

  const previousWeek = urlDate.minus({ weeks: 1 });
  const nextWeek = urlDate.plus({ weeks: 1 });
  const isToday = urlDate.equals(DateTime.now().startOf("week"));

  return (
    <div>
      <Hero
        title={`The best of ${urlDate
          .startOf("week")
          .toLocaleString(DateTime.DATE_SHORT)} - ${urlDate
          .endOf("week")
          .toLocaleString(DateTime.DATE_SHORT)}`}
      />
      <div className="flex justify-center items-center gap-2 mb-3">
        <Button variant={"secondary"} asChild>
          <Link
            to={`/products/leaderboards/weekly/${previousWeek.year}/${previousWeek.weekNumber}`}
          >
            &larr;{" "}
            {previousWeek.startOf("week").toLocaleString(DateTime.DATE_SHORT)}
          </Link>
        </Button>
        {!isToday && (
          <Button variant={"secondary"} asChild>
            <Link
              to={`/products/leaderboards/weekly/${nextWeek.year}/${nextWeek.weekNumber}`}
            >
              {nextWeek.endOf("week").toLocaleString(DateTime.DATE_SHORT)}{" "}
              &rarr;
            </Link>
          </Button>
        )}
      </div>
      <div className="space-y-10 max-w-screen-md mx-auto">
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductCard
            key={index}
            id={`productId-${index}`}
            name="Product Name"
            description="Product Description"
            commentCount={12}
            viewCount={12}
            upvoteCount={120}
          />
        ))}
      </div>
      <ProductPagination totalPages={10} />
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  // loader 함수로부터 발생한 4xx or 5xx 에러인지 확인
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        {error.data?.message} / {error.status}
      </div>
    );
  }

  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }

  return <div>Unknown Error</div>;
}
