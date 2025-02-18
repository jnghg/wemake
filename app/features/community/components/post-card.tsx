import { Link } from "react-router";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import { DotIcon } from "lucide-react";

interface PostCardProps {
  id: string;
  title: string;
  author: string;
  category: string;
  timeAgo: string;
  avatarUrl?: string;
}

export function PostCard({
  id,
  title,
  author,
  category,
  timeAgo,
  avatarUrl,
}: PostCardProps) {
  return (
    <Link to={`/community/${id}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader className="flex flex-row items-center gap-2">
          <Avatar className="size-14">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>{author[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <CardTitle>
              {title}
              <div className="flex gap-2 text-sm leading-tight text-muted-foreground">
                <span>{author} on</span>
                <span>{category}</span>
                <DotIcon className="size-4" />
                <span>{timeAgo}</span>
              </div>
            </CardTitle>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link" asChild>
            Reply &rarr;
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
