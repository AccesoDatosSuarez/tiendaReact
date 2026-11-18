# Graph Report - .  (2026-11-06)

## Corpus Check
- Corpus is ~28.137 words - fits in a single context window. You may not need a graph.

## Summary
- 156 nodes · 306 edges · 11 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: contains: 126 · imports: 96 · imports_from: 75 · calls: 9


## Input Scope
- Requested: auto
- Resolved: all (source: default-auto)
- Included files: 34 · Candidates: recursive
- Excluded: 0 untracked · 0 ignored · 0 sensitive · 0 missing committed
## God Nodes (most connected - your core abstractions)
1. `Badge()` - 14 edges
2. `Button()` - 12 edges
3. `categoryIcons` - 6 edges
4. `setItems()` - 6 edges
5. `formatPrice()` - 6 edges
6. `Card()` - 5 edges
7. `CardContent()` - 5 edges
8. `addToCart()` - 4 edges
9. `PostCard()` - 3 edges
10. `ProductCard()` - 3 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 0 - "Community 0"
Cohesion: 0.10
Nodes (21): addToCart(), CartItem, CartSnapshot, clearCart(), computeSnapshot(), CustomerInfo, generateOrderId(), getOrder() (+13 more)

### Community 1 - "Community 1"
Cohesion: 0.12
Nodes (16): AddToCartButton(), AddToCartButtonProps, gradients, iconColors, ProductCard(), categories, Category, categoryIcons (+8 more)

### Community 2 - "Community 2"
Cohesion: 0.16
Nodes (13): CartButton(), CartDrawer(), openCart(), Footer(), navLinks, shopLinks, Header(), navItems (+5 more)

### Community 3 - "Community 3"
Cohesion: 0.11
Nodes (17): BlogIndexRoute, BlogSlugRoute, ContactoRoute, FileRoutesByFullPath, FileRoutesById, FileRoutesByPath, FileRoutesByTo, FileRouteTypes (+9 more)

### Community 4 - "Community 4"
Cohesion: 0.21
Nodes (7): Route, Route, values, Card(), CardContent(), CardHeader(), CardTitle()

### Community 5 - "Community 5"
Cohesion: 0.26
Nodes (7): Route, PostCard(), formatDate(), Post, posts, features, Route

### Community 7 - "Community 7"
Cohesion: 0.32
Nodes (4): formatDate(), formatPrice(), ConfirmSearch, Route

### Community 8 - "Community 8"
Cohesion: 0.32
Nodes (5): LegalSection, Route, sections, Badge(), badgeVariants

### Community 9 - "Community 9"
Cohesion: 0.50
Nodes (2): Route, getPost()

### Community 10 - "Community 10"
Cohesion: 0.50
Nodes (3): app, __dirname, distDir

### Community 11 - "Community 11"
Cohesion: 0.67
Nodes (2): Register, router

## Knowledge Gaps
- **40 isolated node(s):** `__dirname`, `distDir`, `app`, `AddToCartButtonProps`, `navLinks` (+35 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 9`** (2 nodes): `Route`, `getPost()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 11`** (2 nodes): `Register`, `router`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Badge()` connect `Community 8` to `Community 5`, `Community 9`, `Community 1`, `Community 4`, `Community 0`, `Community 7`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Why does `Button()` connect `Community 2` to `Community 1`, `Community 4`, `Community 5`, `Community 0`, `Community 7`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Why does `categories` connect `Community 1` to `Community 0`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **What connects `__dirname`, `distDir`, `app` to the rest of the system?**
  _40 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.10344827586206896 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.11956521739130435 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._