import { motion } from "motion/react";

export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 bg-[#e2e8f0] h-2 rounded-full overflow-hidden">
        <motion.div
          className="bg-[#2563eb] h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
      <span className="text-xs font-bold tabular-nums w-10 text-right">{value}%</span>
    </div>
  );
}