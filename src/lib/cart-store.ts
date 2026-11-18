import { useSyncExternalStore } from "react";
import { categories, type Category } from "@/data/products";

// ---------------------------------------------------------------------------
// Carrito: store mínimo con persistencia en localStorage.
// ---------------------------------------------------------------------------

const STORAGE_KEY = "herbolario-raiz:cart:v1";
const MAX_QTY = 99;

export interface CartItem {
  slug: string;
  name: string;
  category: Category;
  price: number;
  qty: number;
}

export interface CartSnapshot {
  items: CartItem[];
  count: number;
  subtotal: number;
}

export type AddToCartInput = Pick<CartItem, "slug" | "name" | "category" | "price">;

function loadItems(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is CartItem =>
        typeof item === "object" &&
        item !== null &&
        typeof (item as CartItem).slug === "string" &&
        typeof (item as CartItem).name === "string" &&
        categories.includes((item as CartItem).category) &&
        typeof (item as CartItem).price === "number" &&
        typeof (item as CartItem).qty === "number"
    );
  } catch {
    return [];
  }
}

let items: CartItem[] = loadItems();
const listeners = new Set<() => void>();
let snapshot = computeSnapshot();

function computeSnapshot(): CartSnapshot {
  const count = items.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  return { items, count, subtotal };
}

function setItems(next: CartItem[]) {
  items = next;
  snapshot = computeSnapshot();
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // localStorage puede no estar disponible (modo privado, cuota…): seguimos.
  }
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function addToCart(product: AddToCartInput, qty = 1) {
  const amount = Math.max(1, Math.min(MAX_QTY, Math.round(qty)));
  const next = items.some((item) => item.slug === product.slug)
    ? items.map((item) =>
        item.slug === product.slug
          ? { ...item, qty: Math.min(MAX_QTY, item.qty + amount) }
          : item
      )
    : [...items, { ...product, qty: amount }];
  setItems(next);
}

export function removeFromCart(slug: string) {
  setItems(items.filter((item) => item.slug !== slug));
}

export function setItemQty(slug: string, qty: number) {
  const clamped = Math.min(MAX_QTY, Math.max(1, Math.round(qty)));
  setItems(
    items.map((item) => (item.slug === slug ? { ...item, qty: clamped } : item))
  );
}

export function clearCart() {
  setItems([]);
}

export function useCart(): CartSnapshot {
  return useSyncExternalStore(subscribe, getSnapshotValue, getSnapshotValue);
}

function getSnapshotValue(): CartSnapshot {
  return snapshot;
}

export const cartLimits = { maxQty: MAX_QTY } as const;

// ---------------------------------------------------------------------------
// Envío.
// ---------------------------------------------------------------------------

export type ShippingMethod = "pickup" | "delivery";

export const SHIPPING_COST = 3.95;
export const FREE_SHIPPING_THRESHOLD = 30;

export function shippingCostFor(method: ShippingMethod, subtotal: number): number {
  if (method === "pickup") return 0;
  return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
}

// ---------------------------------------------------------------------------
// Pedidos: hoy se guardan solo en localStorage como punto de enganche para
// conectar más adelante una pasarela de pago o un backend de pedidos.
// ---------------------------------------------------------------------------

const ORDERS_STORAGE_KEY = "herbolario-raiz:orders:v1";

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
  notes: string;
}

export interface Order {
  id: string;
  createdAt: string;
  items: CartItem[];
  shippingMethod: ShippingMethod;
  shippingCost: number;
  subtotal: number;
  total: number;
  customer: CustomerInfo;
}

function loadOrders(): Order[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(ORDERS_STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (order): order is Order =>
        typeof order === "object" &&
        order !== null &&
        typeof (order as Order).id === "string"
    );
  } catch {
    return [];
  }
}

export function saveOrder(order: Order) {
  const orders = loadOrders().filter((o) => o.id !== order.id);
  orders.push(order);
  try {
    window.localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders.slice(-20)));
  } catch {
    // Sin persistencia no pasa nada: la confirmación vive en esta sesión.
  }
}

export function getOrder(id: string): Order | undefined {
  return loadOrders().find((order) => order.id === id);
}

export function generateOrderId(): string {
  const suffix = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `RAIZ-${suffix}`;
}
