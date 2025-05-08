import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/submit-page";
import { Form, type MetaFunction } from "react-router";
import InputPair from "~/common/components/input-pair";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/common/components/ui/select";
import SelectPair from "~/common/components/select-pair";

export const meta: MetaFunction = () => {
  return [
    { title: "Submit | Product" },
    { name: "description", content: "새로운 제품을 등록하세요" },
  ];
};

export default function SubmitPage({ actionData }: Route.ComponentProps) {
  return (
    <div>
      <Hero title="Submit" subtitle="Share your product with the world" />
      <Form className="grid grid-cols-2 gap-10 max-w-screen-lg mx-auto">
        <div className="space-y-5">
          <InputPair
            label="Name"
            description="This is the same of your product"
            name="name"
            id="name"
            type="text"
            required
          />
          <InputPair
            label="Tagline"
            description="60 characters or less"
            name="tagline"
            id="tagline"
            type="text"
            required
            placeholder="A concise description of your product"
          />
          <InputPair
            label="URL"
            description="The URL of your product"
            name="url"
            id="url"
            type="text"
            required
            placeholder="https://example.com"
          />
          <InputPair
            label="Description"
            description="This is the same of your product"
            name="description"
            id="description"
            type="text"
            required
            placeholder="A concise description of your product"
            textArea
          />
          <SelectPair
            label="Category"
            description="Select a category for your product"
            name="category"
            id="category"
            required
            placeholder="Select a category"
            options={[
              { label: "AI", value: "ai" },
              { label: "Design", value: "design" },
              { label: "Development", value: "development" },
              { label: "Marketing", value: "marketing" },
              { label: "Other", value: "other" },
            ]}
          />
        </div>
      </Form>
    </div>
  );
}
