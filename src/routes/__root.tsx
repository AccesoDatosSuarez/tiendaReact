import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

export const Route = createRootRoute({
  component: () => (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
  notFoundComponent: () => (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-5 px-4 py-24 text-center">
      <span className="flex size-16 items-center justify-center rounded-full bg-secondary text-primary">
        <Leaf className="size-8" />
      </span>
      <h1 className="font-display text-3xl font-semibold">Página no encontrada</h1>
      <p className="text-muted-foreground">
        Quizá la hoja se llevó el viento. Vuelve al inicio o explora nuestra tienda.
      </p>
      <div className="flex gap-3">
        <Button asChild>
          <Link to="/">Volver al inicio</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/tienda">Ir a la tienda</Link>
        </Button>
      </div>
    </section>
  ),
});
