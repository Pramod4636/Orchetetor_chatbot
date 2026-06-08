import { Sidebar } from "@/components/layout/Sidebar";
import { TopNavigation } from "@/components/layout/TopNavigation";
import { RightPanel } from "@/components/layout/RightPanel";
import { ChatBubble } from "@/components/chat/ChatBubble";
import { AgentResponse } from "@/components/chat/AgentResponse";
import { ChatInput } from "@/components/chat/ChatInput";

export function ProvisioningDashboard() {
  return (
    <div className="h-screen flex flex-col bg-[#f8fafc] text-[#0f172a]">
      <TopNavigation />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex flex-col relative bg-[#f8fafc] overflow-hidden">
          <div className="flex-1 overflow-y-auto px-6 py-10 pb-56">
            <div className="max-w-4xl mx-auto space-y-10">
              <ChatBubble>
                What is the current status of RITM-40283 for the MongoDB cluster?
              </ChatBubble>
              <AgentResponse />
            </div>
          </div>
          <ChatInput />
        </main>
        <RightPanel />
      </div>
    </div>
  );
}