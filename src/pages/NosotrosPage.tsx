import { HeartHandshake, Leaf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";

// DATA
import { nosotrosText } from "@/data/nosotros";

// REACT COMPONENTE
export function NosotrosPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-secondary/50 to-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Badge variant="secondary" className="gap-1.5 px-3 py-1">
            <Leaf className="size-3.5" />
            Desde 1995 en el barrio
          </Badge>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-primary">
            Quiénes somos
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            Un herbolario de barrio con alma, oficio y memoria: treinta años
            recomendando plantas y aprendiendo de cada cliente.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="flex aspect-video items-center justify-center rounded-2xl border bg-gradient-to-br from-secondary/70 via-card to-accent/30">
            <Leaf className="size-24 text-primary/40" />
          </div>
          <div className="space-y-5">
            <h2 className="font-display text-3xl font-semibold">Nuestra misión</h2>
            <p className="leading-relaxed text-muted-foreground">
              Creemos que la naturaleza funciona mejor cuando llega de forma
              honesta: sin marketing milagroso, sin etiquetas confusas y con
              buena asesoría. Por eso recomendamos plantas medicinales según su
              uso tradicional, la evidencia disponible y tu propia situación.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Empezamos como una parada de mercado en 1995 y somos, desde
              entonces, un punto de encuentro para quienes quieren cuidarse con
              tipos de origen vegetal y poco envase.
            </p>
            <Button asChild>
              <Link to="/tienda">Conoce nuestro catálogo</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t bg-card/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="mb-10 text-center font-display text-3xl font-semibold">
            Nuestros valores
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {nosotrosText.map((v) => (
              <Card key={v.title} className="text-center">
                <CardHeader>
                  <span className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
                    <v.icon className="size-6" />
                  </span>
                  <CardTitle className="font-display text-lg">{v.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {v.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <HeartHandshake className="mx-auto size-8 text-primary" />
        <h2 className="mt-4 font-display text-2xl font-semibold">
          ¿Nos conoces en persona?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Ven a oler, a preguntar y a quedarte charlando. Nos encontrarás en
          Madrid centro, de lunes a sábado.
        </p>
        <Button asChild variant="outline" className="mt-6">
          <Link to="/contacto">Cómo llegar y horarios</Link>
        </Button>
      </section>
    </>
  );
}