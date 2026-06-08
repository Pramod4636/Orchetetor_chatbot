import { provisioningNodes } from "@/data/mockData";
import { ProgressBar } from "./ProgressBar";
import { StatusBadge } from "./StatusBadge";

export function ProvisioningTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm">
      <table className="w-full text-left">
        <thead className="bg-[#f8fafc]">
          <tr>
            <th className="px-6 py-3 text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Node Name</th>
            <th className="px-6 py-3 text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-[11px] font-bold text-[#64748b] uppercase tracking-wider w-1/3">Progress</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#e2e8f0]">
          {provisioningNodes.map((n) => (
            <tr key={n.name} className="hover:bg-[#f8fafc] transition-colors">
              <td className="px-6 py-4 text-sm font-mono text-[#0f172a]">{n.name}</td>
              <td className="px-6 py-4"><StatusBadge status={n.status} /></td>
              <td className="px-6 py-4"><ProgressBar value={n.progress} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}