import { Link, type MetaFunction } from "react-router";

import { ProductCard } from "~/features/products/components/product-card";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { PostCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { JobCard } from "~/features/jobs/components/job-card";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { TeamCard } from "~/features/teams/components/team-card";

export const meta: MetaFunction = ({ matches }) => {
  return [
    { title: "Home | WeMake" },
    { name: "description", content: "Welcome to WeMake" },
  ];
};

export default function HomePage() {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products make by our community today.
          </p>
          <Button variant={"link"} asChild className="text-lg p-0">
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
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
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Discusstions
          </h2>
          <p className="text-xl font-light text-foreground">
            The latest discussions from our community.
          </p>
          <Button variant={"link"} asChild className="text-lg p-0">
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
          <PostCard
            key={index}
            id={`postId-${index}`}
            title="What is the best way to learn React?"
            author="Hg"
            category="Productivity"
            timeAgo="12 hours ago"
            avatarUrl="https://github.com/apple.png"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Ideas GPT
          </h2>
          <p className="text-xl font-light text-foreground">
            Find ideas for your next project.
          </p>
          <Button variant={"link"} asChild className="text-lg p-0">
            <Link to="/ideas">Explore all ideas &rarr;</Link>
          </Button>
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
          <IdeaCard
            id={`ideaId-${index}`}
            title="A startup that creates an AI-powered generated personal trainer, delivering custom workout plans and nutrition advice. And it works on all devices."
            viewCount={123}
            timeAgo="12 hours ago"
            likeCount={12}
            claimed={index % 2 === 0}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Jobs
          </h2>
          <p className="text-xl font-light text-foreground">
            Find the latest jobs from our community.
          </p>
          <Button variant={"link"} asChild className="text-lg p-0">
            <Link to="/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <JobCard
            key={index}
            id={`jobId-${index}`}
            companyName="Meta"
            companyLogoUrl="https://github.com/facebook.png"
            title="Software Engineer"
            createdAt="12 hours ago"
            employmentType="Full-time"
            positionLocation="Remote"
            salary="$100,000 - $120,000"
            location="San Francisco, CA"
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Find a team mate
          </h2>
          <p className="text-xl font-light text-foreground">
            Join a team looking for a new member.
          </p>
          <Button variant={"link"} asChild className="text-lg p-0">
            <Link to="/teams">Explore all teams &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <TeamCard
            key={index}
            id={`teamId-${index}`}
            leaderUsername="tesla"
            leaderAvatarUrl="https://github.com/teslamotors.png"
            projectDescription="a new social media platform"
            positions={[
              "React Developer",
              "Backend Developer",
              "Product Manager",
            ]}
          />
        ))}
      </div>
    </div>
  );
}
