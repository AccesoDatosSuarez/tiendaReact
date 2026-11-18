import { createFileRoute } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PostCard } from "@/components/post-card";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
});

function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <section className="bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Badge variant="secondary" className="gap-1.5 px-3 py-1">
            <BookOpen className="size-3.5" />
            Saber de plantas, que no es poco
          </Badge>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-primary">
            Blog de consejos
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            Guías, remedios tradicionales y trucos de herboristería, escritos
            con cariño y revisados por nuestro equipo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 pt-4 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
