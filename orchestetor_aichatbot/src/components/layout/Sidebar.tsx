import { HelpCircle, MessageCircle, Pin, Plus, Rocket, Search, Server, ClipboardList } from "lucide-react";
import { recentChats } from "@/data/mockData";
import { cn } from "@/lib/utils";

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col h-full w-[300px] shrink-0 bg-white border-r border-[#e2e8f0] py-6 px-4">
      <div className="flex items-center gap-3 mb-6 px-2">
        <div className="h-10 w-10 bg-[#2563eb] rounded-xl flex items-center justify-center shadow-sm">
          <Rocket className="h-5 w-5 text-white" />
        </div>
        <div>
          <h2 className="text-[#0f172a] font-bold text-[15px] leading-tight">AI Platform</h2>
          <p className="text-xs text-[#64748b]">Infrastructure Engine</p>
        </div>
      </div>
      <button className="w-full bg-[#2563eb] text-white py-2.5 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 mb-4 hover:bg-[#1d4ed8] transition-all active:scale-[0.98] shadow-sm">
        <Plus className="h-4 w-4" />
        New Chat
      </button>
      <div className="px-1 mb-5">
        <div className="relative flex items-center">
          <Search className="absolute left-3 h-4 w-4 text-[#94a3b8]" />
          <input
            type="text"
            placeholder="Search chats..."
            aria-label="Search chats"
            className="w-full pl-10 pr-4 py-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] outline-none transition-all placeholder:text-[#94a3b8]"
          />
        </div>
      </div>
      <nav className="flex-1 flex flex-col gap-0.5 overflow-y-auto px-1">
        <p className="text-[10px] font-bold text-[#94a3b8] px-2 mb-2 uppercase tracking-widest">Recent Chats</p>
        {recentChats.map((c) => (
          <a
            key={c.id}
            href="#"
            className={cn(
              "flex items-start gap-3 p-3 rounded-xl transition-all group",
              c.active
                ? "bg-[#eff6ff] border border-[#2563eb]/20"
                : "hover:bg-[#f8fafc] border border-transparent",
            )}
          >
            <MessageCircle
              className={cn(
                "h-4 w-4 mt-0.5 shrink-0",
                c.active ? "text-[#2563eb]" : "text-[#94a3b8] group-hover:text-[#2563eb]",
              )}
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold truncate text-[#0f172a]">{c.title}</p>
              <p className="text-[10px] text-[#94a3b8] mt-0.5">{c.time}</p>
            </div>
          </a>
        ))}
        <p className="text-[10px] font-bold text-[#94a3b8] px-2 mt-6 mb-2 uppercase tracking-widest">Navigation</p>
        <a href="#" className="flex items-center gap-3 px-3 py-2 text-[#475569] hover:bg-[#f8fafc] rounded-lg transition-all text-sm">
          <Server className="h-4 w-4" /> Infrastructure
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 text-[#475569] hover:bg-[#f8fafc] rounded-lg transition-all text-sm">
          <ClipboardList className="h-4 w-4" /> RITM
        </a>
      </nav>
      <div className="mt-auto pt-4 border-t border-[#e2e8f0] space-y-1">
        <a href="#" className="flex items-center gap-3 p-2 text-[#475569] hover:bg-[#f8fafc] rounded-lg text-sm">
          <Pin className="h-4 w-4" /> Pinned
        </a>
        <a href="#" className="flex items-center gap-3 p-2 text-[#475569] hover:bg-[#f8fafc] rounded-lg text-sm">
          <HelpCircle className="h-4 w-4" /> Help
        </a>
      </div>
    </aside>
  );
}