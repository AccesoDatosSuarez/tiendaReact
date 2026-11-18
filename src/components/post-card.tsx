import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate, type Post } from "@/data/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group block focus-visible:outline-none"
    >
      <Card className="h-full overflow-hidden transition-all group-hover:-translate-y-1 group-hover:shadow-md group-focus-visible:ring-2 group-focus-visible:ring-ring/60 bg-gray-300 ">
        <CardContent className="flex h-full flex-col gap-3 p-6">
          <div className="flex items-center justify-between">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="size-3.5" />
              {post.minutes} min
            </span>
          </div>
          <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-primary ">
            {post.title}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
          <div className="mt-auto flex items-center justify-between pt-3 text-sm">
            <time dateTime={post.date} className="text-muted-foreground">
              {formatDate(post.date)}
            </time>
            <span className="flex items-center gap-1 text-muted-foreground transition-colors group-hover:text-primary">
              Leer
              <ArrowRight className="size-4" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
