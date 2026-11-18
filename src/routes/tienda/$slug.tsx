import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Minus, Plus, ShoppingBasket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categoryIcons, getProduct, products } from "@/data/products";
import {
  addToCart,
  cartLimits,
} from "@/lib/cart-store";
import { openCart } from "@/components/cart/cart-drawer";
import { formatPrice } from "@/lib/format";

export const Route = createFileRoute("/tienda/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) {
      throw notFound();
    }
    return { product };
  },
  component: ProductoPage,
});

function ProductoPage() {
  const { product } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const Icon = categoryIcons[product.category];
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Link
          to="/tienda"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Volver a la tienda
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {/* Visual */}
          <div className="flex aspect-square max-h-96 items-center justify-center rounded-2xl border bg-gradient-to-br from-secondary/70 via-card to-accent/30">
            <Icon className="size-28 text-primary/50" />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center gap-5">
            <div className="flex items-center gap-3">
              <Badge variant="secondary">{product.category}</Badge>
              {product.badge && <Badge variant="accent">{product.badge}</Badge>}
            </div>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-primary">
              {product.name}
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {product.description}
            </p>
            <ul className="space-y-2.5">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm">
                  <span className="flex size-5 items-center justify-center rounded-full bg-secondary text-primary">
                    <Check className="size-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 pt-2">
              <span className="font-display text-3xl font-semibold">
                {formatPrice(product.price)}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div
                className="flex items-center rounded-md border"
                role="group"
                aria-label="Cantidad"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  disabled={qty <= 1}
                  aria-label="Quitar una unidad"
                  onClick={() => setQty((value) => Math.max(1, value - 1))}
                >
                  <Minus className="size-4" />
                </Button>
                <span className="w-10 text-center text-sm font-semibold tabular-nums">
                  {qty}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  disabled={qty >= cartLimits.maxQty}
                  aria-label="Añadir una unidad más"
                  onClick={() =>
                    setQty((value) => Math.min(cartLimits.maxQty, value + 1))
                  }
                >
                  <Plus className="size-4" />
                </Button>
              </div>
              <Button
                size="lg"
                className="flex-1 sm:flex-none"
                onClick={() => {
                  addToCart(product, qty);
                  openCart();
                }}
              >
                <ShoppingBasket className="size-5" />
                Añadir al carrito · {formatPrice(product.price * qty)}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              ¿Alguna duda sobre este producto?{" "}
              <Link to="/contacto" className="font-semibold text-primary hover:underline">
                Escríbenos
              </Link>{" "}
              y te asesoramos.
            </p>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t bg-card/60">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="mb-8 font-display text-2xl font-semibold">
              Más de {product.category.toLowerCase()}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/tienda/$slug"
                  params={{ slug: p.slug }}
                  className="group flex items-center gap-4 rounded-xl border bg-background p-4 transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
                >
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon className="size-6" />
                  </span>
                  <span>
                    <span className="block font-medium group-hover:text-primary">
                      {p.name}
                    </span>
                    <span className="block text-sm text-muted-foreground">
                      {formatPrice(p.price)}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link to="/tienda" search={{ cat: product.category }}>
                  Ver toda la categoría
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
