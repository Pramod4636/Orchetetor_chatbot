import { motion } from "motion/react";
import type { ReactNode } from "react";

export function ChatBubble({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-end gap-2">
      <span className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider mr-2">You</span>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] text-white py-3 px-6 rounded-3xl rounded-tr-sm shadow-md max-w-[80%]"
      >
        <p className="text-[15px] leading-relaxed">{children}</p>
      </motion.div>
    </div>
  );
}