import { Link } from "@tanstack/react-router";
import { Clock, Leaf, MapPin, Phone } from "lucide-react";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/tienda", label: "Tienda" },
  { to: "/blog", label: "Blog" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
] as const;

const shopLinks = [
  { to: "/tienda", search: { cat: "Infusiones" }, label: "Infusiones y tés" },
  { to: "/tienda", search: { cat: "Aceites" }, label: "Aceites naturales" },
  { to: "/tienda", search: { cat: "Plantas" }, label: "Plantas medicinales" },
  { to: "/tienda", search: { cat: "Cosmética" }, label: "Cosmética natural" },
] as const;

export function Footer() {
  return (
    <footer className="border-t bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 font-display text-lg font-semibold text-primary">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="size-5" />
            </span>
            Herbolario Raíz
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Tu tienda natural desde 1995. Plantas medicinales, infusiones bio,
            aceites y cosmética con criterio, cariño y buena asesoría.
          </p>
        </div>

        <nav aria-label="Navegación del pie">
          <h3 className="mb-3 font-display text-base font-semibold">Navegación</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Categorías de la tienda">
          <h3 className="mb-3 font-display text-base font-semibold">Tienda</h3>
          <ul className="space-y-2 text-sm">
            {shopLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to="/tienda"
                  search={l.search}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-3 font-display text-base font-semibold">Encuéntranos</h3>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              Calle del Jardín 12, bajo
              <br />
              28004 Madrid
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-primary" />
              <a href="tel:+34910000000" className="hover:text-primary">
                910 000 000
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 shrink-0 text-primary" />
              L–V 10:00–19:00 · S 10:00–14:00
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Herbolario Raíz. Todos los derechos reservados.</p>
          <Link to="/legal" className="transition-colors hover:text-primary">
            Aviso legal · Privacidad · Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
