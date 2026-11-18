import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Flower,
  Minus,
  Plus,
  ShoppingBasket,
  X,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { categoryIcons } from "@/data/products";
import {
  cartLimits,
  removeFromCart,
  setItemQty,
  useCart,
  FREE_SHIPPING_THRESHOLD,
} from "@/lib/cart-store";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

const OPEN_CART_EVENT = "herbolario:open-cart";
const { maxQty } = cartLimits;

/** Abre el drawer del carrito desde cualquier parte de la app. */
export function openCart() {
  window.dispatchEvent(new CustomEvent(OPEN_CART_EVENT));
}

export function CartButton({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  const { count } = useCart();

  return (
    <Button
      variant="secondary"
      className={cn("relative", className)}
      aria-label={`Abrir el carrito (${count} ${count === 1 ? "unidad" : "unidades"})`}
      onClick={() => {
        openCart();
        onClick?.();
      }}
    >
      <ShoppingBasket className="size-6" />
      <span className="hidden sm:inline">Carrito</span>
      {count > 0 && (
        <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
          {count > maxQty ? "99+" : count }
        </span>
      )}
    </Button>
  );
}

/** Panel deslizante para revisar el carrito. Se abre con openCart(). */
export function CartDrawer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_CART_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CART_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60]"
      role="dialog"
      aria-modal="true"
      aria-label="Carrito de compra"
    >
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-[2px]"
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />
      <div
        className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-background shadow-xl"
        onClick={(event) => event.stopPropagation()}
        onKeyDown={(event) => event.stopPropagation()}
      >
        {/* Cabecera */}
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h2 className="font-display text-lg font-semibold text-primary">
            Tu carrito
          </h2>
          <Button
            variant="ghost"
            size="icon"
            autoFocus
            aria-label="Cerrar carrito"
            onClick={() => setOpen(false)}
          >
            <X className="size-5" />
          </Button>
        </div>

        <CartDrawerBody close={() => setOpen(false)} />
      </div>
    </div>
  );
}

function CartDrawerBody({ close }: { close: () => void }) {
  const { items, count, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-secondary text-primary">
          <ShoppingBasket className="size-7" />
        </span>
        <div>
          <p className="font-medium text-foreground">Tu carrito está vacío</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Descubre nuestras infusiones, aceites y plantas medicinales.
          </p>
        </div>
        <Button asChild onClick={close}>
          <Link to="/tienda">Ver la tienda</Link>
        </Button>
      </div>
    );
  }

  const missingForFreeShipping = FREE_SHIPPING_THRESHOLD - subtotal;

  return (
    <>
      <ul className="flex-1 divide-y overflow-y-auto px-5">
        {items.map((item) => {
          const Icon: LucideIcon = categoryIcons[item.category];
          return (
            <li key={item.slug} className="flex gap-3 py-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <Icon className="size-5" />
              </span>
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <Link
                    to="/tienda/$slug"
                    params={{ slug: item.slug }}
                    className="text-sm font-medium leading-snug transition-colors hover:text-primary"
                    onClick={close}
                  >
                    {item.name}
                  </Link>
                  <span className="shrink-0 text-sm font-semibold tabular-nums">
                    {formatPrice(item.price * item.qty)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div
                    className="flex items-center rounded-md border"
                    role="group"
                    aria-label={`Cantidad de ${item.name}`}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7"
                      disabled={item.qty <= 1}
                      aria-label={`Quitar una unidad de ${item.name}`}
                      onClick={() => setItemQty(item.slug, item.qty - 1)}
                    >
                      <Minus className="size-3.5" />
                    </Button>
                    <span className="w-8 text-center text-sm font-medium tabular-nums">
                      {item.qty}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7"
                      disabled={item.qty >= maxQty}
                      aria-label={`Añadir una unidad más de ${item.name}`}
                      onClick={() => setItemQty(item.slug, item.qty + 1)}
                    >
                      <Plus className="size-3.5" />
                    </Button>
                  </div>
                  <button
                    type="button"
                    className="text-xs text-muted-foreground transition-colors hover:text-destructive"
                    onClick={() => removeFromCart(item.slug)}
                  >
                    Quitar
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="border-t bg-card/60 px-5 py-4">
        {missingForFreeShipping > 0 && (
          <p className="mb-3 rounded-md bg-secondary/70 px-3 py-2 text-xs text-primary">
            Te faltan {formatPrice(missingForFreeShipping)} para tener envío gratis.
          </p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Subtotal ({count} {count === 1 ? "unidad" : "unidades"})
          </span>
          <span className="font-display text-lg font-semibold">
            {formatPrice(subtotal)}
          </span>
        </div>
        <p className="mt-0.5 text-xs text-muted-foreground">
          Gastos de envío calculados en el pago.
        </p>
        <Button asChild className="mt-3 w-full" size="lg">
          <Link to="/tienda/checkout" onClick={close}>
            Tramitar pedido
          </Link>
        </Button>
      </div>
    </>
  );
}


