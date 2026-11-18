import {
  Droplets,
  Flower2,
  Leaf,
  Milk,
  Dna,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Category =
  | "Infusiones"
  | "Aceites"
  | "Plantas"
  | "Miel"
  | "Especias"
  | "Cosmética";

export const categoryIcons: Record<Category, LucideIcon> = {
  Infusiones: Leaf,
  Aceites: Droplets,
  Plantas: Flower2,
  Miel: Milk,
  Especias: Sparkles,
  Cosmética: Dna,
};

export interface Product {
  slug: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  benefits: string[];
  badge?: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    slug: "te-verde-jazmin-bio",
    name: "Té verde con jazmín bio",
    category: "Infusiones",
    price: 7.9,
    description:
      "Té verde ecológico de primera cosecha, perfumado con flores de jazmín en grano. Recolectado a mano en primavera y enrollado en cinco pasadas para conservar todo su aroma.",
    benefits: [
      "Rico en antioxidantes (catequinas)",
      "Energía suave y sostenida",
      "Primera cosecha del año",
    ],
    badge: "Bio",
    featured: true,
  },
  {
    slug: "tisana-sueno-dorado",
    name: "Tisana Sueño Dorado",
    category: "Infusiones",
    price: 5.65,
    description:
      "Mezcla dulce y envolvente de manzanilla, valeriana, melisa y lavanda. Nuestra fórmula clásica para acompañar la noche, con regaliz para redondear el sabor.",
    benefits: ["Relajación y descanso", "Sin teína", "Fórmula tradicional"],
    featured: true,
  },
  {
    slug: "oleo-maculado-calendula",
    name: "Aceite maculado de caléndula",
    category: "Aceites",
    price: 9.2,
    description:
      "Caléndula maculada en frío sobre aceite de girasol ecológico, reposando cuatro semanas a la usanza tradicional. Ideal para pieles sensibles y para los más pequeños de casa.",
    benefits: ["Suavidad piel a piel", "Apto para bebés", "Macelación artesanal"],
    badge: "Artesanal",
    featured: true,
  },
  {
    slug: "aceite-romero-mediterraneo",
    name: "Aceite de romero mediterráneo",
    category: "Aceites",
    price: 8.75,
    description:
      "Maculación de romero recolectado en la sierra sobre aceite de oliva virgen extra. Un aroma fresco y balsámico, tanto para cocinar como para un masaje circular.",
    benefits: ["Aroma balsámico", "Recolección silvestre", "Base de oliva AOVE"],
  },
  {
    slug: "raiz-muira-puama",
    name: "Raíz de muira puama",
    category: "Plantas",
    price: 11.4,
    description:
      "Raíz troceada de la planta amazónica de vitalidad, seleccionada a mano. Para infusión decoctada (30 minutos a fuego lento) o tintura.",
    benefits: ["Vitalidad y energía", "Raíz troceada", "Origen amazónico"],
  },
  {
    slug: "equinacea-capsulas",
    name: "Echinacea purpurea en cápsulas",
    category: "Plantas",
    price: 13.9,
    description:
      "Cápsulas vegetales de raíz de equinácea de cultivo ecológico, 90 cápsulas de 500 mg. La aliada clásica de las defensas en temporada de frío.",
    benefits: ["Apoyo a las defensas", "Cápsula vegetariana", "Cultivo ecológico"],
    badge: "Favorita",
  },
  {
    slug: "miel-tomillo-sierra",
    name: "Miel cruda de tomillo de sierra",
    category: "Miel",
    price: 8.5,
    description:
      "Miel monofloral cruda, sin pasteurizar, de colmenas situadas en la sierra. Potente, aromática y perfecta para tomar a cucharadas o en infusiones.",
    benefits: ["Miel cruda sin pasteurizar", "Monofloral", "Cosecha de temporada"],
    featured: true,
  },
  {
    slug: "miel-azahar",
    name: "Miel de azahar",
    category: "Miel",
    price: 9.8,
    description:
      "Cosecha temprana del flor de azahar, delicada y muy dulce. Un clásico para desayunos y postres que llega con los primeros días de primavera.",
    benefits: ["Aroma floral intenso", "Cosecha de primavera", "Cristalización lenta"],
  },
  {
    slug: "curcuma-premium-polvo",
    name: "Cúrcuma en polvo premium",
    category: "Especias",
    price: 6.3,
    description:
      "Raíz de cúrcuma molida finísima, sin aditivos y con alto porcentaje natural de curcumina. Para golden lattes, smoothies y para dar color a los guisos.",
    benefits: ["Alta curcumina", "Molienda fina", "Cultivo responsable"],
  },
  {
    slug: "canela-ceylon-ramas",
    name: "Canela de Ceilán en rama",
    category: "Especias",
    price: 4.95,
    description:
      "Ramitas de canela fina (Cinnamomum verum), la canela auténtica de Ceilán: dulce, delicada y mucho más suave que la cassia.",
    benefits: ["Variedad auténtica de Ceilán", "Sabor delicado", "Cosecha manual"],
  },
  {
    slug: "balsamo-calendula-labios",
    name: "Bálsamo de caléndula labial",
    category: "Cosmética",
    price: 4.5,
    description:
      "Bálsamo labial con aceite de caléndula, cera de abejas y manteca de karité. Protege del frío y del viento con una fórmula libre de perfumes y parafinas.",
    benefits: [
      "Con caléndula y karité",
      "Sin parafinas ni perfume",
      "Envase de cartón",
    ],
    badge: "Cero plástico",
  },
  {
    slug: "agua-floral-rosa",
    name: "Agua floral de rosa damascena",
    category: "Cosmética",
    price: 12.6,
    description:
      "Hidrolato puro de rosa de Damasco destilado en primavera, sin alcohol ni conservantes. Úsalo como tónico facial o para refrescar la piel a lo largo del día.",
    benefits: ["Hidrolato puro 100 %", "Refrescante y tónico", "Sin alcohol"],
  },
];

export const categories: Category[] = [
  "Infusiones",
  "Aceites",
  "Plantas",
  "Miel",
  "Especias",
  "Cosmética",
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const featuredProducts = products.filter((p) => p.featured);
