import {
  useEffect,
  useState,
  type ComponentProps,
  type FormEvent,
} from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Leaf, ShoppingBasket, Store, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categoryIcons } from "@/data/products";
import {
  FREE_SHIPPING_THRESHOLD,
  SHIPPING_COST,
  clearCart,
  generateOrderId,
  saveOrder,
  shippingCostFor,
  useCart,
  type CustomerInfo,
  type Order,
  type ShippingMethod,
} from "@/lib/cart-store";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-md border border-input bg-card px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30";

const shippingOptions: Array<{
  id: ShippingMethod;
  label: string;
  description: string;
  icon: typeof Truck;
}> = [
  {
    id: "pickup",
    label: "Recogida en tienda",
    description: "Te avisamos en cuanto esté lista tu cesta y la recoges sin coste.",
    icon: Store,
  },
  {
    id: "delivery",
    label: `Envío a domicilio (24/48 h)`,
    description: `${formatPrice(SHIPPING_COST)} · gratis a partir de ${formatPrice(FREE_SHIPPING_THRESHOLD)}`,
    icon: Truck,
  },
];

export const Route = createFileRoute("/tienda/checkout")({
  component: CheckoutPage,
});

function CheckoutPage() {
  const cart = useCart();
  const navigate = useNavigate();
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>("delivery");
  const [values, setValues] = useState<CustomerInfo>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof CustomerInfo, string>>>({});

  const isEmpty = cart.items.length === 0;

  useEffect(() => {
    if (isEmpty) {
      navigate({ to: "/tienda", replace: true });
    }
  }, [isEmpty, navigate]);

  if (isEmpty) return null;

  const shippingCost = shippingCostFor(shippingMethod, cart.subtotal);
  const total = cart.subtotal + shippingCost;

  function setField(field: keyof CustomerInfo, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values, shippingMethod);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const order: Order = {
      id: generateOrderId(),
      createdAt: new Date().toISOString(),
      items: cart.items,
      shippingMethod,
      shippingCost,
      subtotal: cart.subtotal,
      total,
      customer: values,
    };
    saveOrder(order);
    clearCart();
    navigate({
      to: "/tienda/pedido-confirmado",
      search: { id: order.id },
    });
  }

  return (
    <>
      <section className="bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <Badge variant="secondary" className="gap-1.5 px-3 py-1">
            <Leaf className="size-3.5" />
            Pago a la entrega, sin sorpresas
          </Badge>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-primary">
            Tramitar pedido
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            Cuéntanos dónde lo llevamos y lo preparamos con el mismo cuidado de
            siempre.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <form
          noValidate
          className="grid gap-10 pt-8 lg:grid-cols-[1fr_360px]"
          onSubmit={handleSubmit}
        >
          {/* Formulario */}
          <div className="space-y-10">
            <fieldset className="space-y-4">
              <legend className="font-display text-xl font-semibold">
                Tus datos
              </legend>
              <Field
                id="name"
                label="Nombre completo"
                required
                autoComplete="name"
                placeholder="María García"
                value={values.name}
                onChange={(e) => setField("name", e.target.value)}
                error={errors.name}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  id="email"
                  type="email"
                  label="Email"
                  required
                  autoComplete="email"
                  placeholder="maria@ejemplo.es"
                  value={values.email}
                  onChange={(e) => setField("email", e.target.value)}
                  error={errors.email}
                />
                <Field
                  id="phone"
                  type="tel"
                  label="Teléfono"
                  required
                  autoComplete="tel"
                  placeholder="600 123 456"
                  value={values.phone}
                  onChange={(e) => setField("phone", e.target.value)}
                  error={errors.phone}
                />
              </div>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="font-display text-xl font-semibold">
                Cómo lo quieres recibir
              </legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {shippingOptions.map((option) => {
                  const Icon = option.icon;
                  const selected = shippingMethod === option.id;
                  return (
                    <label
                      key={option.id}
                      className={cn(
                        "flex cursor-pointer items-start gap-3 rounded-xl border bg-card p-4 transition-colors",
                        selected
                          ? "border-primary ring-2 ring-ring/40"
                          : "hover:border-muted-foreground/40"
                      )}
                    >
                      <input
                        type="radio"
                        name="shipping"
                        className="sr-only"
                        checked={selected}
                        onChange={() => setShippingMethod(option.id)}
                      />
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                        <Icon className="size-4.5" />
                      </span>
                      <span>
                        <span className="block font-medium">{option.label}</span>
                        <span className="mt-0.5 block text-sm text-muted-foreground">
                          {option.description}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>

              {shippingMethod === "delivery" && (
                <div className="space-y-4">
                  <Field
                    id="address"
                    label="Dirección"
                    required
                    autoComplete="street-address"
                    placeholder="Calle Mayor, 12, 2º A"
                    value={values.address}
                    onChange={(e) => setField("address", e.target.value)}
                    error={errors.address}
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      id="city"
                      label="Ciudad"
                      required
                      autoComplete="address-level2"
                      placeholder="Valencia"
                      value={values.city}
                      onChange={(e) => setField("city", e.target.value)}
                      error={errors.city}
                    />
                    <Field
                      id="zip"
                      label="Código postal"
                      required
                      inputMode="numeric"
                      autoComplete="postal-code"
                      placeholder="46001"
                      value={values.zip}
                      onChange={(e) => setField("zip", e.target.value)}
                      error={errors.zip}
                    />
                  </div>
                </div>
              )}
              {shippingMethod === "pickup" && (
                <p className="rounded-md bg-secondary/60 px-3 py-2 text-sm text-primary">
                  Recoges tu pedido en Herbolario Raíz sin coste. Te llamamos
                  cuando esté listo (normalmente en el mismo día).
                </p>
              )}
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="font-display text-xl font-semibold">
                Notas (opcional)
              </legend>
              <textarea
                id="notes"
                rows={3}
                className={cn(inputClass, "resize-y")}
                placeholder="Preferencias de entrega, alergias, si nadie estará en casa…"
                value={values.notes}
                onChange={(e) => setField("notes", e.target.value)}
              />
            </fieldset>

            <div className="space-y-3">
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                <ShoppingBasket className="size-5" />
                Confirmar pedido · {formatPrice(total)}
              </Button>
              <p className="text-xs text-muted-foreground">
                El pago se realiza al recibir el pedido (o al recogerlo en
                tienda). Al confirmar te guardamos el resumen y te contactamos
                si surge cualquier incidencia.{" "}
                <Link to="/contacto" className="font-medium text-primary hover:underline">
                  ¿Alguna duda? Escríbenos
                </Link>
              </p>
            </div>
          </div>

          {/* Resumen */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border bg-card p-6">
              <h2 className="font-display text-lg font-semibold">Resumen del pedido</h2>
              <ul className="mt-4 space-y-3">
                {cart.items.map((item) => {
                  const Icon = categoryIcons[item.category];
                  return (
                    <li key={item.slug} className="flex items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                        <Icon className="size-4" />
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
              <div className="mt-5 space-y-2 border-t pt-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="tabular-nums">{formatPrice(cart.subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Envío</span>
                  <span className="tabular-nums">
                    {shippingCost === 0 ? "Gratis" : formatPrice(shippingCost)}
                  </span>
                </div>
                <div className="flex justify-between border-t pt-2 font-display text-lg font-semibold">
                  <span>Total</span>
                  <span className="tabular-nums">{formatPrice(total)}</span>
                </div>
              </div>
              {shippingMethod === "delivery" &&
                cart.subtotal < FREE_SHIPPING_THRESHOLD && (
                  <p className="mt-3 rounded-md bg-secondary/60 px-3 py-2 text-xs text-primary">
                    Con {formatPrice(FREE_SHIPPING_THRESHOLD - cart.subtotal)} más
                    tienes envío gratis.
                  </p>
                )}
            </div>
          </aside>
        </form>
      </section>
    </>
  );
}

function validate(
  values: CustomerInfo,
  shippingMethod: ShippingMethod
): Partial<Record<keyof CustomerInfo, string>> {
  const errors: Partial<Record<keyof CustomerInfo, string>> = {};

  if (!values.name.trim()) errors.name = "Díganos su nombre.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Ese email no parece válido.";
  }
  if (values.phone.replace(/\D/g, "").length < 9) {
    errors.phone = "Necesitamos un teléfono para avisarle.";
  }
  if (shippingMethod === "delivery") {
    if (!values.address.trim()) errors.address = "¿A dónde lo enviamos?";
    if (!values.city.trim()) errors.city = "¿En qué ciudad?";
    if (!/^\d{5}$/.test(values.zip.trim())) {
      errors.zip = "Código postal de 5 dígitos.";
    }
  }

  return errors;
}

function Field({
  id,
  label,
  error,
  className,
  required,
  ...props
}: {
  id: string;
  label: string;
  error?: string;
} & ComponentProps<"input">) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
        {required && <span aria-hidden="true" className="text-destructive"> *</span>}
      </label>
      <input
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        className={cn(inputClass, error && "border-destructive")}
        {...props}
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
