import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate, getPost } from "@/data/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) {
      throw notFound();
    }
    return { post };
  },
  component: ArticuloPage,
});

function ArticuloPage() {
  const { post } = Route.useLoaderData();
  const Icon = post.icon;

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Volver al blog
        </Link>

        <header className="mt-8 space-y-5">
          <div className="flex items-center gap-4">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="size-4" />
              {post.minutes} min de lectura
            </span>
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-primary">
            {post.title}
          </h1>
          <time dateTime={post.date} className="block text-sm text-muted-foreground">
            {formatDate(post.date)} · Equipo Herbolario Raíz
          </time>
        </header>

        <div className="my-10 flex items-center justify-center rounded-2xl border bg-gradient-to-br from-secondary/70 via-card to-accent/30 py-16">
          <Icon className="size-20 text-primary/50" />
        </div>

        <div className="space-y-6">
          {post.content.map((p) => (
            <p key={p.slice(0, 32)} className="text-lg leading-relaxed text-foreground/90">
              {p}
            </p>
          ))}
        </div>

        <footer className="mt-14 rounded-xl border bg-card p-6 text-center">
          <p className="font-display text-lg font-semibold">
            ¿Te apetece probarlo con plantas de verdad?
          </p>
          <p className="mt-1.5 mb-5 text-sm text-muted-foreground">
            En nuestra tienda encontrarás todos los ingredientes mencionados en
            el artículo.
          </p>
          <Link
            to="/tienda"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Visitar la tienda →
          </Link>
        </footer>
      </article>
    </>
  );
}
