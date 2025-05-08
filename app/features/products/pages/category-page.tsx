import { Button } from "~/common/components/ui/button";
import { Form } from "react-router";
import { ProductCard } from "../components/product-card";
import { Hero } from "~/common/components/hero";
import { Input } from "~/common/components/ui/input";
import type { Route } from "./+types/category-page";
import ProductPagination from "~/common/components/product-pagination";

export const meta = ({ params }: Route.MetaArgs) => {
  return [
    { title: `Category | Product` },
    { name: "description", content: `Category 제품을 확인하세요` },
  ];
};

export default function CategoryPage() {
  return (
    <div className="space-y-10">
      <Hero
        title="Developer Tools"
        subtitle="Tools for developers to build products faster"
      />
      <Form className="flex justify-center max-w-screen-sm mx-auto items-center gap-2">
        <Input
          name="query"
          placeholder="Search for products"
          className="text-lg"
        />
        <Button type="submit">Search</Button>
      </Form>
      <div className="space-y-5 max-w-screen-md mx-auto">
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
