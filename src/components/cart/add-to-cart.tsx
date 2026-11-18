import { useEffect, useState } from "react";
import { Check, ShoppingBasket } from "lucide-react";
import type { VariantProps } from "class-variance-authority";
import { Button, type buttonVariants } from "@/components/ui/button";
import { addToCart, type AddToCartInput } from "@/lib/cart-store";
import { cn } from "@/lib/utils";

type AddToCartButtonProps = {
  product: AddToCartInput;
  qty?: number;
  label?: string;
  addedLabel?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  className?: string;
};

/** Botón "Añadir al carrito" con mini-afirmación visual al añadir. */
export function AddToCartButton({
  product,
  qty = 1,
  label = "Añadir",
  addedLabel = "Añadido",
  variant = "default",
  size = "sm",
  className,
}: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const timeout = window.setTimeout(() => setAdded(false), 1400);
    return () => window.clearTimeout(timeout);
  }, [added]);

  return (
    <Button
      variant={variant}
      size={size}
      className={cn("shrink-0", className)}
      aria-label={`${label}: ${product.name}`}
      onClick={() => {
        addToCart(product, qty);
        setAdded(true);
      }}
    >
      {added ? <Check className="size-4" /> : <ShoppingBasket className="size-4" />}
      {added ? addedLabel : label}
    </Button>
  );
}
