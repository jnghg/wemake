import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  /** 홈 */
  index("common/pages/home-page.tsx"),

  /** 상품 */
  ...prefix("products", [
    index("features/products/pages/products-page.tsx"),
    /** 상품 > 리더보드 */
    ...prefix("leaderboards", [
      index("features/products/pages/leaderboard-page.tsx"),
      route(
        "/yearly/:year",
        "features/products/pages/yearly-leaderboard-page.tsx"
      ),
      route(
        "/monthly/:year/:month",
        "features/products/pages/monthly-leaderboard-page.tsx"
      ),
      route(
        "/daily/:year/:month/:day",
        "features/products/pages/daily-leaderboard-page.tsx"
      ),
      route(
        "/weekly/:year/:week",
        "features/products/pages/weekly-leaderboard-page.tsx"
      ),
    ]),
    /** 상품 > 카테고리 */
    ...prefix("categories", [
      index("features/products/pages/categories-page.tsx"),
      route("/:category", "features/products/pages/category-page.tsx"),
    ]),
    /** 상품 > 검색 */
    route("/search", "features/products/pages/search-page.tsx"),
    /** 상품 > 제출 */
    route("/submit", "features/products/pages/submit-page.tsx"),
    /** 상품 > 홍보 */
    route("/promote", "features/products/pages/promote-page.tsx"),
  ]),
] satisfies RouteConfig;
