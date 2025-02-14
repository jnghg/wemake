export function HomePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our App</h1>
    </div>
  );
}

export function loader() {
  return {
    message: "Welcome",
  };
}

export function meta() {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to our application" },
  ];
}
