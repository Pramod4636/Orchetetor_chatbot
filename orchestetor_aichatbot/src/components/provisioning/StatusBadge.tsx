import { cn } from "@/lib/utils";

type Status = "PROVISIONING" | "PENDING" | "COMPLETE" | "FAILED";

const styles: Record<Status, string> = {
  PROVISIONING: "bg-[#2563eb]/10 text-[#2563eb]",
  PENDING: "bg-[#4d556b]/10 text-[#4d556b]",
  COMPLETE: "bg-emerald-500/10 text-emerald-600",
  FAILED: "bg-[#ba1a1a]/10 text-[#ba1a1a]",
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={cn(
        "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide",
        styles[status],
      )}
    >
      {status}
    </span>
  );
}