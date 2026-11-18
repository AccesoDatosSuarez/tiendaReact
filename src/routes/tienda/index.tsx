import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/data/products";

type StoreSearch = {
  cat?: string;
};

function validateSearch(search: Record<string, unknown>): StoreSearch {
  const cat =
    typeof search.cat === "string" &&
    (categories as string[]).includes(search.cat)
      ? search.cat
      : undefined;
  return { cat };
}

export const Route = createFileRoute("/tienda/")({
  validateSearch,
  component: TiendaPage,
});

function TiendaPage() {
  const { cat } = Route.useSearch();
  const visible = cat ? products.filter((p) => p.category === cat) : products;

  return (
    <>
      <section className="bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Badge variant="secondary" className="gap-1.5 px-3 py-1">
            <Leaf className="size-3.5" />
            Elaborado con cuidado, enviado en 24/48 h
          </Badge>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-primary">
            Tienda natural
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            Todo nuestro catálogo, seleccionado a mano: infusiones, aceites,
            plantas medicinales, miel, especias y cosmética.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        {/* Filtros por categoría */}
        <div className="mb-10 flex flex-wrap items-center gap-2">
          <Link to="/tienda" search={{}} className="focus-visible:outline-none">
            <Badge
              variant={cat === undefined ? "default" : "outline"}
              className="cursor-pointer px-4 py-1.5 text-sm"
            >
              Todo
            </Badge>
          </Link>
          {categories.map((c) => (
            <Link
              key={c}
              to="/tienda"
              search={{ cat: c }}
              className="focus-visible:outline-none"
            >
              <Badge
                variant={cat === c ? "default" : "outline"}
                className="cursor-pointer px-4 py-1.5 text-sm"
              >
                {c}
              </Badge>
            </Link>
          ))}
        </div>

        <p className="mb-6 text-sm text-muted-foreground">
          {visible.length} producto{visible.length !== 1 && "s"}
          {cat ? (
            <>
              {" "}
              en <span className="font-semibold text-primary">{cat}</span> ·{" "}
              <Link to="/tienda" search={{}} className="hover:text-primary hover:underline">
                quitar filtro
              </Link>
            </>
          ) : (
            " en el catálogo"
          )}
        </p>

        {visible.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-muted-foreground">
            No hay productos en esta categoría todavía.
          </p>
        )}
      </section>
    </>
  );
}
