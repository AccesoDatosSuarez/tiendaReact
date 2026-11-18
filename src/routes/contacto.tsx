import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/contacto")({
  component: ContactoPage,
});

function ContactoPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-12 text-center">
        <Badge variant="secondary" className="px-3 py-1">
          Estamos para ayudarte
        </Badge>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-primary">
          Contacto
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-lg text-muted-foreground">
          Cuéntanos qué necesitas: dudas de herboristería, pedidos especiales,
          talleres o lo que se te ocurra.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
        {/* Datos */}
        <div className="space-y-4">
          {[
            {
              icon: MapPin,
              title: "Dirección",
              lines: ["Calle del Jardín 12, bajo", "28004 Madrid"],
            },
            {
              icon: Phone,
              title: "Teléfono",
              lines: ["910 000 000"],
              href: "tel:+34910000000",
            },
            {
              icon: Mail,
              title: "Email",
              lines: ["hola@herbolarioraiz.es"],
              href: "mailto:hola@herbolarioraiz.es",
            },
            {
              icon: Clock,
              title: "Horario",
              lines: ["L–V 10:00–19:00", "Sábados 10:00–14:00"],
            },
          ].map((item) => (
            <Card key={item.title}>
              <CardContent className="flex items-start gap-4 p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  {item.lines.map((line) =>
                    item.href ? (
                      <a
                        key={line}
                        href={item.href}
                        className="block text-sm text-muted-foreground hover:text-primary"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-sm text-muted-foreground">
                        {line}
                      </p>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Formulario */}
        <Card className="h-fit">
          <CardContent className="p-6 sm:p-8">
            {sent ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <CheckCircle2 className="size-12 text-primary" />
                <h2 className="font-display text-2xl font-semibold">
                  ¡Mensaje enviado!
                </h2>
                <p className="max-w-sm text-muted-foreground">
                  Gracias por escribirnos. Te responderemos en un plazo máximo
                  de 24–48 horas laborables.
                </p>
                <Button variant="outline" onClick={() => setSent(false)}>
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="nombre" className="text-sm font-medium">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      required
                      placeholder="Tu nombre"
                      className="w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="asunto" className="text-sm font-medium">
                    Asunto
                  </label>
                  <select
                    id="asunto"
                    name="asunto"
                    className="w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                  >
                    <option>Duda de herboristería</option>
                    <option>Pedido o producto</option>
                    <option>Talleres y visitas</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="mensaje" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    placeholder="Escríbenos con calma, como una buena infusión…"
                    className="w-full resize-none rounded-md border border-input bg-card px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send className="size-4" />
                  Enviar mensaje
                </Button>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Al enviar aceptas nuestra política de privacidad. Los datos
                  solo se usan para responder a tu consulta.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
