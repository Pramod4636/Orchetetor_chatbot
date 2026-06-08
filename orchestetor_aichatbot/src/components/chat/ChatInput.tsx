import { Mic, Paperclip, Send } from "lucide-react";
import { useState } from "react";

const chips = ["View Logs", "Scale Node", "Security Groups"];

export function ChatInput() {
  const [value, setValue] = useState("");
  return (
    <div className="absolute bottom-0 left-0 w-full px-6 pb-6 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/95 to-transparent pt-12 pointer-events-none">
      <div className="max-w-4xl mx-auto pointer-events-auto">
        <div className="flex gap-2 mb-4 justify-center">
          {chips.map((c) => (
            <button
              key={c}
              className="px-4 py-1.5 rounded-full bg-white border border-[#e2e8f0] text-xs font-medium text-[#475569] hover:border-[#2563eb]/40 hover:text-[#2563eb] transition-all"
            >
              {c}
            </button>
          ))}
        </div>
        <div className="relative flex items-center bg-white border border-[#e2e8f0] p-2 rounded-[32px] shadow-2xl focus-within:ring-4 focus-within:ring-[#2563eb]/10 focus-within:border-[#2563eb] transition-all">
          <button
            aria-label="Attach file"
            className="p-3 text-[#2563eb] hover:bg-[#2563eb]/5 rounded-full transition-colors"
          >
            <Paperclip className="h-5 w-5" />
          </button>
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={1}
            placeholder="Ask about infrastructure or provisioning..."
            className="flex-1 bg-transparent border-none focus:ring-0 focus:outline-none py-3 text-[15px] resize-none placeholder:text-[#94a3b8] text-[#0f172a]"
          />
          <div className="flex items-center gap-1 pr-1">
            <button
              aria-label="Voice input"
              className="p-3 text-[#64748b] hover:bg-[#f1f5f9] rounded-full transition-colors"
            >
              <Mic className="h-5 w-5" />
            </button>
            <button
              aria-label="Send"
              className="bg-[#2563eb] text-white h-12 w-12 rounded-full hover:shadow-lg hover:opacity-90 transition-all active:scale-95 flex items-center justify-center"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
        <p className="text-center text-[10px] text-[#94a3b8] mt-4 uppercase tracking-[3px] font-bold">
          Enterprise AI Agent • Version 4.2.0-stable
        </p>
      </div>
    </div>
  );
}