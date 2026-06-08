import { motion } from "motion/react";
import { Check, GitBranch, Loader2, Shield, SlidersHorizontal } from "lucide-react";
import { workflowSteps } from "@/data/mockData";
import type { WorkflowStep } from "@/types";

function StepIcon({ step }: { step: WorkflowStep }) {
  if (step.state === "complete") return <Check className="h-3.5 w-3.5" />;
  if (step.state === "current") return <Loader2 className="h-3.5 w-3.5 animate-spin" />;
  if (step.id === "config") return <SlidersHorizontal className="h-3 w-3" />;
  if (step.id === "security") return <Shield className="h-3 w-3" />;
  return null;
}

export function WorkflowStepper() {
  return (
    <div className="bg-[#f8fafc] p-6 rounded-2xl border border-[#e2e8f0]">
      <p className="text-[11px] font-bold text-[#64748b] mb-6 flex items-center gap-2 uppercase tracking-wider">
        <GitBranch className="h-4 w-4" />
        Provisioning Workflow
      </p>
      <div className="relative flex items-start justify-between px-4">
        <div className="absolute top-3 left-10 right-10 h-0.5 bg-[#e2e8f0]" />
        {workflowSteps.map((s, i) => {
          const active = s.state !== "upcoming";
          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: active ? 1 : 0.5, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="relative z-10 flex flex-col items-center gap-2"
            >
              <div
                className={
                  "h-6 w-6 rounded-full flex items-center justify-center text-white shadow-sm " +
                  (s.state === "current"
                    ? "bg-[#2563eb] ring-4 ring-[#2563eb]/20"
                    : s.state === "complete"
                      ? "bg-[#2563eb]"
                      : "bg-[#e2e8f0] text-[#64748b]")
                }
              >
                <StepIcon step={s} />
              </div>
              <span
                className={
                  "text-[10px] font-bold uppercase tracking-wider " +
                  (active ? "text-[#2563eb]" : "text-[#64748b]")
                }
              >
                {s.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}