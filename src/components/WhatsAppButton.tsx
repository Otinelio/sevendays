import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/store/settingsStore";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Order via WhatsApp"
      title="Order via WhatsApp"
      className="fixed bottom-5 right-5 z-[100]"
    >
      <span className="relative flex">
        <motion.span
          className="absolute inset-0 rounded-full bg-paprika/60"
          animate={{ scale: [1, 1.6, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="relative bg-paprika hover:bg-tomato transition-colors p-4 rounded-full shadow-xl shadow-paprika/30">
          <MessageCircle className="size-6 text-white" />
        </span>
      </span>
    </a>
  );
}
