import { Settings } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = ["Infrastructure", "Provisioning", "Monitoring"];

export function TopNavigation() {
  const [active, setActive] = useState("Provisioning");
  return (
    <header className="flex justify-between items-center w-full px-8 h-16 sticky top-0 z-50 bg-white border-b border-[#e2e8f0]">
      <div className="flex items-center gap-10">
        <span className="text-lg font-extrabold text-[#2563eb] tracking-tight">
          Enterprise AI Provisioning
        </span>
        <nav className="hidden md:flex gap-2 items-center h-full">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={cn(
                "relative px-3 py-2 text-sm font-medium transition-colors",
                active === t ? "text-[#2563eb]" : "text-[#64748b] hover:text-[#0f172a]",
              )}
            >
              {t}
              {active === t && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-[#2563eb]"
                />
              )}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center bg-[#eff6ff] px-3 py-1 rounded-full text-xs font-bold text-[#2563eb]">
          gpt-4o-new
        </div>
        <button
          aria-label="Settings"
          className="p-2 text-[#64748b] hover:bg-[#f8fafc] rounded-full transition-colors"
        >
          <Settings className="h-5 w-5" />
        </button>
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center text-white text-xs font-bold">
          DA
        </div>
      </div>
    </header>
  );
}