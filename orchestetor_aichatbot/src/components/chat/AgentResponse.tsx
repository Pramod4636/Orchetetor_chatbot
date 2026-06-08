import { motion } from "motion/react";
import { Bot } from "lucide-react";
import { ProvisioningTable } from "@/components/provisioning/ProvisioningTable";
import { WorkflowStepper } from "@/components/provisioning/WorkflowStepper";

export function AgentResponse() {
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex items-center gap-2 ml-2">
        <div className="h-6 w-6 rounded-full bg-[#2563eb] flex items-center justify-center">
          <Bot className="h-3.5 w-3.5 text-white" />
        </div>
        <span className="text-[10px] font-bold text-[#2563eb] uppercase tracking-wider">
          Infrastructure Agent
        </span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="border border-[#e2e8f0] bg-white/70 backdrop-blur-xl py-7 px-8 rounded-3xl rounded-tl-sm shadow-sm w-full space-y-7"
      >
        <p className="text-[17px] leading-relaxed text-[#0f172a]">
          RITM-40283 is currently in the{" "}
          <span className="text-[#2563eb] font-semibold">&quot;Infrastructure Provisioning&quot;</span>{" "}
          phase. The primary node is 85% complete and is undergoing final validation checks.
        </p>
        <ProvisioningTable />
        <WorkflowStepper />
      </motion.div>
    </div>
  );
}