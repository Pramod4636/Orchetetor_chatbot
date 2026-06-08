import { relatedAssets } from "@/data/mockData";
import { AssetCard } from "@/components/shared/AssetCard";

const meta = [
  { label: "Target Cluster", value: "MongoDB Production v6.0", full: true },
  { label: "Compute", value: "16 vCPU", full: false },
  { label: "Memory", value: "64GB RAM", full: false },
  { label: "Storage", value: "2TB NVMe SSD (Encrypted)", full: true },
];

export function RightPanel() {
  return (
    <aside className="hidden lg:block w-[360px] h-full shrink-0 bg-white border-l border-[#e2e8f0] overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-[#0f172a]">Task Details</h3>
          <span className="px-2 py-1 bg-[#eff6ff] text-[#2563eb] text-[10px] font-bold rounded-lg border border-[#2563eb]/20">
            RITM-40283
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {meta.map((m) => (
            <div
              key={m.label}
              className={
                "p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] " +
                (m.full ? "col-span-2" : "")
              }
            >
              <p className="text-[10px] font-bold text-[#94a3b8] uppercase mb-1 tracking-wider">
                {m.label}
              </p>
              <p className="font-bold text-[#0f172a] text-sm">{m.value}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <h4 className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider mb-2">
            Related Assets
          </h4>
          {relatedAssets.map((a) => (
            <AssetCard key={a.id} asset={a} />
          ))}
        </div>
        <div className="mt-6 h-44 rounded-2xl overflow-hidden relative border border-[#e2e8f0] bg-gradient-to-br from-[#2563eb] via-[#1e40af] to-[#0f172a]">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,white,transparent_40%)]" />
          <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 360 180" fill="none">
            <circle cx="80" cy="60" r="4" fill="white" />
            <circle cx="200" cy="40" r="4" fill="white" />
            <circle cx="280" cy="90" r="4" fill="white" />
            <line x1="80" y1="60" x2="200" y2="40" stroke="white" strokeWidth="0.5" />
            <line x1="200" y1="40" x2="280" y2="90" stroke="white" strokeWidth="0.5" />
            <line x1="80" y1="60" x2="280" y2="90" stroke="white" strokeWidth="0.5" />
          </svg>
          <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Live Topology</p>
            <p className="text-lg font-bold leading-tight mt-1">us-east-1 / vpc-prod-2</p>
            <p className="text-xs opacity-70 mt-0.5">3 AZ • 2 nodes • encrypted</p>
          </div>
        </div>
      </div>
    </aside>
  );
}