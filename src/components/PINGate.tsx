import { useState } from "react";
import { motion } from "framer-motion";
import { Delete, Check } from "lucide-react";

export function PINGate({
  correctPin,
  label,
  onUnlock,
}: {
  correctPin: string;
  label: string;
  onUnlock: () => void;
}) {
  const [pin, setPin] = useState("");
  const [shake, setShake] = useState(0);
  const [error, setError] = useState("");

  const press = (d: string) => {
    if (pin.length >= 4) return;
    setError("");
    setPin(pin + d);
  };
  const back = () => setPin(pin.slice(0, -1));
  const confirm = () => {
    if (pin === correctPin) {
      onUnlock();
    } else {
      setError("Invalid PIN");
      setShake((n) => n + 1);
      setPin("");
    }
  };

  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center px-4">
      <div className="w-full max-w-sm text-center">
        <div className="font-display font-black lowercase text-4xl text-cream mb-2">sevendays</div>
        <div className="font-display uppercase text-cream/70 tracking-wider mb-8">{label}</div>

        <motion.div
          key={shake}
          animate={shake ? { x: [-8, 8, -6, 6, 0] } : {}}
          transition={{ duration: 0.35 }}
          className="flex justify-center gap-3 mb-2"
        >
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`size-4 rounded-full border-2 ${
                pin.length > i ? "bg-paprika border-paprika" : "border-white/30"
              }`}
            />
          ))}
        </motion.div>
        <div className="h-5 text-xs text-paprika">{error}</div>

        <div className="grid grid-cols-3 gap-3 mt-6">
          {["1","2","3","4","5","6","7","8","9"].map((d) => (
            <button
              key={d}
              onClick={() => press(d)}
              className="aspect-square text-2xl font-display font-bold text-cream bg-white/5 hover:bg-white/10 rounded-lg border border-white/10"
            >
              {d}
            </button>
          ))}
          <button onClick={back} className="aspect-square flex items-center justify-center text-cream/70 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10">
            <Delete className="size-5" />
          </button>
          <button onClick={() => press("0")} className="aspect-square text-2xl font-display font-bold text-cream bg-white/5 hover:bg-white/10 rounded-lg border border-white/10">
            0
          </button>
          <button
            onClick={confirm}
            disabled={pin.length !== 4}
            className="aspect-square flex items-center justify-center bg-paprika hover:bg-tomato disabled:bg-paprika/30 rounded-lg text-white"
          >
            <Check className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
