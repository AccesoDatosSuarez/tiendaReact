import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  HandHeart,
  Leaf,
  Quote,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/product-card";
import { PostCard } from "@/components/post-card";
import { featuredProducts } from "@/data/products";
import { posts } from "@/data/posts";

const features = [
  {
    icon: Leaf,
    title: "Ecológico y trazable",
    text: "Productores locales y certificación bio en más del 80 % de nuestro catálogo.",
  },
  {
    icon: HandHeart,
    title: "Asesoría real",
    text: "Más de 25 años recomendando plantas con criterio, no con catálogo automático.",
  },
  {
    icon: Truck,
    title: "Envío en 24/48 h",
    text: "Bien empaquetado y plástico free desde nuestro obrador de Madrid.",
  },
];

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/60 via-background to-background">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
          <div className="space-y-6">
            <Badge variant="secondary" className="gap-1.5 px-3 py-1">
              <Leaf className="size-3.5" />
              Desde 1995, tu herbolario de confianza
            </Badge>
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl">
              La naturaleza,
              <br />
              bien acompañada.
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              Infusiones bio, plantas medicinales, aceites y cosmética natural
              elegidos a mano. Con la asesoría de siempre y el blog de consejos
              que echarás de menos.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/tienda">
                  <ShoppingBag className="size-4" />
                  Visitar la tienda
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/blog">
                  <BookOpen className="size-4" />
                  Consejos del blog
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative justify-self-center md:justify-self-end">
            <div className="flex size-64 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent/40 sm:size-80">
              <Leaf className="size-24 text-primary/70 sm:size-32" />
            </div>
            <div className="absolute -left-6 -top-4 rounded-xl border bg-card p-4 shadow-md">
              <p className="text-xs text-muted-foreground">Cosecha de</p>
              <p className="font-display text-lg font-semibold text-primary">
                manzanilla ✓ en flor
              </p>
            </div>
            <div className="absolute bottom-2 -right-4 rounded-xl border bg-card p-4 shadow-md">
              <p className="text-xs text-muted-foreground">Este otoño</p>
              <p className="font-display text-lg font-semibold text-primary">
                nuevas tisanas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <f.icon className="size-5" />
              </span>
              <div>
                <h2 className="font-display text-base font-semibold">{f.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {f.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Productos destacados */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Lo mejor del herbolario
            </p>
            <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight">
              Productos destacados
            </h2>
          </div>
          <Link
            to="/tienda"
            className="hidden items-center gap-1 text-sm font-semibold text-primary hover:underline sm:flex"
          >
            Ver todo el catálogo
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Button asChild variant="outline">
            <Link to="/tienda">Ver todo el catálogo</Link>
          </Button>
        </div>
      </section>

      {/* Cita */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <Quote className="mx-auto size-8 opacity-60" />
          <p className="mt-6 font-display text-2xl font-medium leading-snug sm:text-3xl">
            «Deja que la comida sea tu medicina y la medicina tu comida.»
          </p>
          <p className="mt-4 text-sm opacity-70">Hipócrates · 460 a. C.</p>
        </div>
      </section>

      {/* Blog */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Aprende con nosotros
            </p>
            <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight">
              Consejos del blog
            </h2>
          </div>
          <Link
            to="/blog"
            className="hidden items-center gap-1 text-sm font-semibold text-primary hover:underline sm:flex"
          >
            Todos los artículos
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...posts]
            .sort((a, b) => b.date.localeCompare(a.date))
            .slice(0, 3)
            .map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
        </div>
      </section>
    </>
  );
}
