import { f as formatFCFA } from "./router-Cl-UL5Ap.mjs";
function composeOrderMessage(items, meta) {
  const lines = items.map(
    (i) => `${i.name} x${i.qty} - ${formatFCFA(i.price * i.qty)}`
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
    meta.note ? `Note: ${meta.note}` : ""
  ].filter(Boolean).join("\n");
}
function composeContactMessage(name, phone, message) {
  return [
    "Message via sevendays website",
    `From: ${name} - ${phone}`,
    `Message: ${message}`
  ].join("\n");
}
function composeReservation(type, fields) {
  const lines = [`${type === "Dine-in" ? "Reservation Request" : type + " Request"} - sevendays`];
  for (const [k, v] of Object.entries(fields)) {
    if (v) lines.push(`${k}: ${v}`);
  }
  return lines.join("\n");
}
export {
  composeReservation as a,
  composeContactMessage as b,
  composeOrderMessage as c
};
