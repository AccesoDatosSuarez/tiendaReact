# 🌿 Herbolario Raíz

Web de un herbolario con tienda online (catálogo) y blog de consejos.

- **React 19 + TypeScript** con **Vite**
- **TanStack Router** (enrutado file-based, navegación con componente `Link`)
- **Tailwind CSS v4 + shadcn/ui**
- **Express** como servidor Node.js para el despliegue de la SPA

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:5173
```

El árbol de rutas se genera automáticamente en `src/routeTree.gen.ts`
a partir de los archivos de `src/routes` (gracias al plugin de Vite).

## Despliegue en Node.js

```bash
npm run build      # type-check + build de producción en dist/
npm start          # sirve dist/ con Express → http://localhost:3000
```

Configura el puerto con la variable de entorno `PORT`.

Dentro del contenedor de producción, todas las rutas no estáticas
(`/tienda`, `/blog/mi-articulo`, …) hacen fallback a `index.html`,
así que la recarga directa o los enlaces compartidos funcionan.

## Estructura

```
src/
├── routes/              # Rutas file-based de TanStack Router
│   ├── __root.tsx       #   Layout (header + footer)
│   ├── index.tsx        #   Inicio
│   ├── tienda/          #   Catálogo + ficha de producto ($slug)
│   ├── blog/            #   Listado + artículo ($slug)
│   ├── nosotros.tsx
│   ├── contacto.tsx
│   └── legal.tsx
├── components/
│   ├── ui/              # Componentes shadcn (button, badge, card)
│   └── …                # Header, Footer, ProductCard, PostCard
├── data/                # Catálogo de productos y posts (mock tipado)
└── index.css            # Tema Tailwind v4 (paleta natural y cálida)
```

## Próximos pasos sugeridos

- Carrito con Zustand/Context + persistencia (los datos ya están tipados para ello)
- Base de datos real para pedidos y contenido editable
- Formulario de contacto conectado a un endpoint de email
