import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Store, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categoryIcons } from "@/data/products";
import { getOrder } from "@/lib/cart-store";
import { formatDate, formatPrice } from "@/lib/format";

type ConfirmSearch = {
  id?: string;
};

function validateSearch(search: Record<string, unknown>): ConfirmSearch {
  return {
    id: typeof search.id === "string" ? search.id : undefined,
  };
}

export const Route = createFileRoute("/tienda/pedido-confirmado")({
  validateSearch,
  loaderDeps: ({ search }) => ({ id: search.id }),
  loader: ({ deps }) => {
    // Pedidos en localStorage: punto de sustitución cuando se conecte
    // una pasarela real o un backend de pedidos.
    const order = deps.id ? getOrder(deps.id) : undefined;
    if (!order) {
      throw notFound();
    }
    return { order };
  },
  component: PedidoConfirmadoPage,
});

function PedidoConfirmadoPage() {
  const { order } = Route.useLoaderData();
  const isDelivery = order.shippingMethod === "delivery";

  return (
    <>
      <section className="bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <CheckCircle2 className="size-8" />
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-primary">
            ¡Pedido confirmado!
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Gracias, {order.customer.name.split(" ")[0]}. Ya estamos preparando
            tu cesta con el mismo mimo de siempre.
          </p>
          <Badge variant="secondary" className="mt-5 gap-1.5 px-3 py-1.5">
            Pedido <span className="tabular-nums">{order.id}</span> · {formatDate(order.createdAt)}
          </Badge>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <div className="grid gap-6 pt-10">
          {/* Entrega */}
          <div className="rounded-xl border bg-card p-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-semibold">
              {isDelivery ? (
                <Truck className="size-5 text-primary" />
              ) : (
                <Store className="size-5 text-primary" />
              )}
              {isDelivery ? "Envío a domicilio" : "Recogida en tienda"}
            </h2>
            {isDelivery ? (
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                En 24/48 h le llevaremos el pedido a{" "}
                <span className="font-medium text-foreground">
                  {order.customer.address}, {order.customer.zip}{" "}
                  {order.customer.city}
                </span>
                . Si no hay nadie, volveremos a pasar o te llamaremos al{" "}
                {order.customer.phone}.
              </p>
            ) : (
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Te llamaremos al {order.customer.phone} cuando esté listo para
                que pases a recogerlo.
              </p>
            )}
          </div>

          {/* Resumen */}
          <div className="rounded-xl border bg-card p-6">
            <h2 className="font-display text-lg font-semibold">Resumen</h2>
            <ul className="mt-4 divide-y">
              {order.items.map((item) => {
                const Icon = categoryIcons[item.category];
                return (
                  <li key={item.slug} className="flex items-center gap-3 py-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                      <Icon className="size-4.5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium">
                        {item.name}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {item.qty} × {formatPrice(item.price)}
                      </span>
                    </span>
                    <span className="text-sm font-semibold tabular-nums">
                      {formatPrice(item.qty * item.price)}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 space-y-2 border-t pt-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="tabular-nums">{formatPrice(order.subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Envío</span>
                <span className="tabular-nums">
                  {order.shippingCost === 0 ? "Gratis" : formatPrice(order.shippingCost)}
                </span>
              </div>
              <div className="flex justify-between border-t pt-2 font-display text-lg font-semibold">
                <span>Total</span>
                <span className="tabular-nums">{formatPrice(order.total)}</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              El pago se realiza a la entrega{isDelivery ? " (contra-entrega)" : " al recogerlo"}.
            </p>
          </div>

          {order.customer.notes && (
            <div className="rounded-xl border bg-card p-6">
              <h2 className="font-display text-lg font-semibold">Tus notas</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                “{order.customer.notes}”
              </p>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button asChild size="lg">
              <Link to="/tienda">
                <ArrowLeft className="size-4" />
                Volver a la tienda
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contacto">Contactar con nosotros</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
