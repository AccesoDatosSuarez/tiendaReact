import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AddToCartButton } from "@/components/cart/add-to-cart";
import { categoryIcons, type Product } from "@/data/products";
import { formatPrice } from "@/lib/format";

const gradients: Record<string, string> = {
  Infusiones: "from-emerald-100 to-teal-50",
  Aceites: "from-amber-100 to-yellow-50",
  Plantas: "from-lime-100 to-green-50",
  Miel: "from-amber-100 to-orange-50",
  Especias: "from-orange-100 to-rose-50",
  Cosmética: "from-rose-100 to-pink-50",
};

const iconColors: Record<string, string> = {
  Infusiones: "text-emerald-700",
  Aceites: "text-amber-700",
  Plantas: "text-lime-700",
  Miel: "text-amber-800",
  Especias: "text-orange-700",
  Cosmética: "text-rose-700",
};

export function ProductCard({ product }: { product: Product }) {
  const Icon = categoryIcons[product.category];

  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md focus-within:ring-2 focus-within:ring-ring/60">
      <Link
        to="/tienda/$slug"
        params={{ slug: product.slug }}
        aria-label={`Ver detalle de ${product.name}`}
        className="block focus-visible:outline-none"
      >
        <div
          className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${gradients[product.category]}`}
        >
          <Icon
            className={`size-12 transition-transform group-hover:scale-110 ${iconColors[product.category]} opacity-80`}
          />
          {product.badge && (
            <Badge variant="accent" className="absolute left-3 top-3">
              {product.badge}
            </Badge>
          )}
        </div>
      </Link>
      <CardContent className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {product.category}
        </p>
        <h3 className="font-display text-lg font-semibold leading-snug">
          <Link
            to="/tienda/$slug"
            params={{ slug: product.slug }}
            className="transition-colors hover:text-primary focus-visible:outline-none"
          >
            {product.name}
          </Link>
        </h3>
        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <span className="text-base font-semibold text-primary">
            {formatPrice(product.price)}
          </span>
          <AddToCartButton product={product} size="sm" variant="secondary" />
        </div>
      </CardContent>
    </Card>
  );
}
