import { Download, Eye, FileJson, FileText } from "lucide-react";
import type { RelatedAsset } from "@/types";

export function AssetCard({ asset }: { asset: RelatedAsset }) {
  const isPdf = asset.kind === "pdf";
  const Icon = isPdf ? FileText : FileJson;
  const Action = isPdf ? Download : Eye;
  return (
    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-[#f8fafc] transition-all border border-transparent hover:border-[#e2e8f0] cursor-pointer">
      <div
        className={
          "h-10 w-10 rounded-lg flex items-center justify-center " +
          (isPdf ? "bg-red-50 text-red-500" : "bg-blue-50 text-[#2563eb]")
        }
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold truncate text-[#0f172a]">{asset.name}</p>
        <p className="text-[10px] text-[#94a3b8]">{asset.meta}</p>
      </div>
      <Action className="h-4 w-4 text-[#94a3b8] group-hover:text-[#2563eb] transition-colors" />
    </div>
  );
}