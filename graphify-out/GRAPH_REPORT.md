# Graph Report - opentest  (2026-11-06)

## Corpus Check
- 31 files · ~25,116 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 2 file(s) not represented in the graph (top: (none) 1, .css 1)

## Summary
- 254 nodes · 455 edges · 18 communities (14 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 9 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Badge
- routeTree.gen.ts
- badge.tsx
- compilerOptions
- components.json
- compilerOptions
- dependencies
- package.json
- select.tsx
- devDependencies
- server.mjs
- 🌿 Herbolario Raíz
- tsconfig.json
- scripts
- AGENTS.md
- @types/node@^24.7.2
- @types/react-dom@^19.2.2
- typescript@^5.9.3

## God Nodes (most connected - your core abstractions)
1. `Badge()` - 22 edges
2. `compilerOptions` - 21 edges
3. `lucide-react` - 18 edges
4. `compilerOptions` - 17 edges
5. `@tanstack/react-router` - 16 edges
6. `Button()` - 14 edges
7. `FileRoutesByPath` - 10 edges
8. `PostCard()` - 9 edges
9. `Card()` - 9 edges
10. `CardContent()` - 9 edges

## Surprising Connections (you probably didn't know these)
- `LegalPage()` --calls--> `Badge()`  [EXTRACTED]
  src/routes/legal.tsx → src/components/ui/badge.tsx
- `FileRoutesByPath` --references--> `Route`  [EXTRACTED]
  src/routeTree.gen.ts → src/routes/blog/$slug.tsx
- `FileRoutesByPath` --references--> `Route`  [EXTRACTED]
  src/routeTree.gen.ts → src/routes/__root.tsx
- `FileRoutesById` --references--> `Route`  [EXTRACTED]
  src/routeTree.gen.ts → src/routes/__root.tsx
- `PostCard()` --calls--> `Card()`  [EXTRACTED]
  src/components/post-card.tsx → src/components/ui/card.tsx

## Import Cycles
- None detected.

## Communities (18 total, 4 thin omitted)

### Community 0 - "Badge"
Cohesion: 0.14
Nodes (26): lucide-react, @tanstack/react-router, PostCard(), gradients, iconColors, ProductCard(), Badge(), badgeVariants (+18 more)

### Community 1 - "routeTree.gen.ts"
Cohesion: 0.07
Nodes (30): getProduct(), Register, router, @tanstack/react-router, Route, Route, Route, LegalPage() (+22 more)

### Community 2 - "badge.tsx"
Cohesion: 0.14
Nodes (19): class-variance-authority, @radix-ui/react-slot, react, Footer(), navLinks, shopLinks, Header(), navItems (+11 more)

### Community 3 - "compilerOptions"
Cohesion: 0.09
Nodes (22): compilerOptions, allowImportingTsExtensions, baseUrl, jsx, lib, module, moduleDetection, moduleResolution (+14 more)

### Community 4 - "components.json"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 5 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution, noEmit, noFallthroughCasesInSwitch (+10 more)

### Community 6 - "dependencies"
Cohesion: 0.12
Nodes (17): dependencies, @base-ui/react@^1.9.0, class-variance-authority@^0.7.1, @fontsource-variable/geist@^5.3.0, graphifyy@^0.10.0, lucide-react@^0.545.0, @radix-ui/react-slot@^1.2.3, react@^19.2.0 (+9 more)

### Community 7 - "package.json"
Cohesion: 0.15
Nodes (12): allowScripts, esbuild@0.28.2, clsx@^2.1.1, shadcn@^4.23.0, @types/react@^19.2.2, name, private, type (+4 more)

### Community 8 - "select.tsx"
Cohesion: 0.18
Nodes (6): cn@^0.5.2, @base-ui/react, cn, SelectContent(), SelectScrollDownButton(), SelectScrollUpButton()

### Community 9 - "devDependencies"
Cohesion: 0.19
Nodes (11): devDependencies, tailwindcss@^4.1.14, @tailwindcss/vite@^4.1.14, @tanstack/router-plugin@^1.132.0, vite@^7.1.10, @vitejs/plugin-react@^5.1.0, tailwindcss, @tailwindcss/vite (+3 more)

### Community 10 - "server.mjs"
Cohesion: 0.29
Nodes (5): express@^4.21.2, express, app, __dirname, distDir

### Community 11 - "🌿 Herbolario Raíz"
Cohesion: 0.33
Nodes (5): Desarrollo, Despliegue en Node.js, Estructura, 🌿 Herbolario Raíz, Próximos pasos sugeridos

### Community 12 - "tsconfig.json"
Cohesion: 0.33
Nodes (5): compilerOptions, baseUrl, paths, files, references

### Community 13 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, preview, start

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `lucide-react` connect `Badge` to `routeTree.gen.ts`, `badge.tsx`, `dependencies`, `package.json`, `select.tsx`?**
  _High betweenness centrality (0.116) - this node is a cross-community bridge._
- **Should `Badge` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Why does `@tanstack/react-router` connect `Badge` to `routeTree.gen.ts`, `badge.tsx`, `dependencies`, `package.json`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Should `routeTree.gen.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0748663101604278 - nodes in this community are weakly interconnected._
- **Why does `react` connect `badge.tsx` to `select.tsx`, `routeTree.gen.ts`, `dependencies`, `package.json`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **Should `badge.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1431451612903226 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._