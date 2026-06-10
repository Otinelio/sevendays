import type { CartItem } from "@/store/cartStore";
import { formatFCFA } from "@/data/defaultMenu";

export type OrderMeta = {
  name: string;
  orderType: "Dine-in" | "Takeaway" | "Delivery";
  note?: string;
};

export function composeOrderMessage(items: CartItem[], meta: OrderMeta) {
  const lines = items.map(
    (i) => `${i.name} x${i.qty} - ${formatFCFA(i.price * i.qty)}`,
  );
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  return [
    "New Order - sevendays",
    "----------------------",
    ...lines,
    "----------------------",
    `SUBTOTAL: ${formatFCFA(subtotal)}`,
    `Order type: ${meta.orderType}`,
    `Name: ${meta.name}`,
    meta.note ? `Note: ${meta.note}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function composeContactMessage(name: string, phone: string, message: string) {
  return [
    "Message via sevendays website",
    `From: ${name} - ${phone}`,
    `Message: ${message}`,
  ].join("\n");
}

export function composeReservation(
  type: "Dine-in" | "Takeaway" | "Delivery",
  fields: Record<string, string | number>,
) {
  const lines = [`${type === "Dine-in" ? "Reservation Request" : type + " Request"} - sevendays`];
  for (const [k, v] of Object.entries(fields)) {
    if (v) lines.push(`${k}: ${v}`);
  }
  return lines.join("\n");
}
