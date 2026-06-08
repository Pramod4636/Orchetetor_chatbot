import { createFileRoute } from "@tanstack/react-router";
import { ProvisioningDashboard } from "@/pages/ProvisioningDashboard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Enterprise AI Provisioning" },
      { name: "description", content: "AI-driven infrastructure provisioning and monitoring dashboard." },
      { property: "og:title", content: "Enterprise AI Provisioning" },
      { property: "og:description", content: "AI-driven infrastructure provisioning and monitoring dashboard." },
    ],
  }),
  component: Index,
});

function Index() {
  return <ProvisioningDashboard />;
}
