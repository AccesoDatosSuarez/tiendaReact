import { createFileRoute } from "@tanstack/react-router";
import { ScrollText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/legal")({
  component: LegalPage,
});

interface LegalSection {
  id: string;
  heading: string;
  paragraphs: string[];
}

const sections: LegalSection[] = [
  {
    id: "aviso",
    heading: "Aviso legal",
    paragraphs: [
      "En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa de los datos identificativos de este sitio web:",
      "Titular: Herbolario Raíz S.L. · CIF B-00000000 · Calle del Jardín 12, bajo, 28004 Madrid · Teléfono 910 000 000 · Email hola@herbolarioraiz.es · Inscrita en el Registro Mercantil de Madrid.",
      "El acceso a este sitio web implica la aceptación de las presentes condiciones. Los contenidos (textos, fotografías y diseños) son propiedad del titular y no pueden reproducirse sin autorización expresa.",
    ],
  },
  {
    id: "privacidad",
    heading: "Política de privacidad",
    paragraphs: [
      "Protegemos tus datos conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD).",
      "Los datos facilitados a través del formulario de contacto se utilizan únicamente para responder a tu consulta. No se ceden a terceros ni se emplean con fines publicitarios. Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a hola@herbolarioraiz.es.",
      "Conservamos los mensajes de contacto durante el tiempo necesario para atender la solicitud y, en su caso, las obligaciones legales aplicables.",
    ],
  },
  {
    id: "cookies",
    heading: "Política de cookies",
    paragraphs: [
      "Este sitio web no utiliza cookies de seguimiento ni de publicidad. Dado que la web no incorpora herramientas de analítica de terceros, no se requiere banner de consentimiento.",
      "Únicamente podrían emplearse cookies técnicas imprescindibles para el funcionamiento de la web, quedando excluidas del régimen de consentimiento según la guía de la AEPD.",
    ],
  },
];

function LegalPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Badge variant="secondary" className="gap-1.5 px-3 py-1">
        <ScrollText className="size-3.5" />
        Transparencia ante todo
      </Badge>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-primary">
        Información legal
      </h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Aquí encontrarás el aviso legal, la política de privacidad y la de
        cookies. Explicado en claro, sin letra pequeña.
      </p>

      <div className="mt-12 space-y-12">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-24 space-y-4">
            <h2 className="font-display text-2xl font-semibold">{s.heading}</h2>
            <div className="space-y-3.5 text-muted-foreground">
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 32)} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-16 text-center text-sm text-muted-foreground">
        Última actualización: noviembre de 2026
      </p>
    </section>
  );
}
