import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartButton, CartDrawer } from "@/components/cart/cart-drawer";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Inicio", exact: true },
  { to: "/tienda", label: "Tienda", exact: false },
  { to: "/blog", label: "Blog", exact: false },
  { to: "/nosotros", label: "Nosotros", exact: false },
  { to: "/contacto", label: "Contacto", exact: false },
  { to: "/ajustes", label: "Ajustes", exact: false },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-primary"
          onClick={() => setOpen(false)}
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="size-5" />
          </span>
          Herbolario Raíz
        </Link>

        {/* Navegación escritorio */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground data-[status=active]:bg-muted data-[status=active]:text-primary"
              activeProps={{
                className:
                  "data-[status=active]:bg-muted data-[status=active]:text-primary",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <CartButton />
          <Button asChild size="sm">
            <Link to="/tienda">Ver tienda</Link>
          </Button>
        </div>

        {/* Botón menú móvil */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {/* Navegación móvil */}
      <div
        className={cn(
          "overflow-hidden border-t bg-background transition-all md:hidden",
          open ? "max-h-80" : "max-h-0 border-t-0"
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3" aria-label="Menú móvil">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground data-[status=active]:bg-muted data-[status=active]:text-primary"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <CartButton className="mt-2 w-full" onClick={() => setOpen(false)} />
          <Button asChild className="mt-1 w-full">
            <Link to="/tienda" onClick={() => setOpen(false)}>
              Ver tienda
            </Link>
          </Button>
        </nav>
      </div>

      {/* Drawer del carrito (uno solo, compartido por toda la página) */}
      <CartDrawer />
    </header>
  );
}
