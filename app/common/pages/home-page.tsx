import type { MetaFunction } from "react-router";

export default function HomePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our App</h1>
    </div>
  );
}

export const meta: MetaFunction = ({ matches }) => {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to our application" },
  ];
};
