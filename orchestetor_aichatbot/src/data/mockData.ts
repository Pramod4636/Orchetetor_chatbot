import type { ProvisioningNode, RecentChat, RelatedAsset, WorkflowStep } from "@/types";

export const recentChats: RecentChat[] = [
  { id: "1", title: "MongoDB Provisioning Status...", time: "2m ago", active: true },
  { id: "2", title: "GPU Cluster scaling...", time: "1h ago" },
  { id: "3", title: "IaaS Request RITM-40...", time: "3h ago" },
  { id: "4", title: "Firewall Policy Audit...", time: "Yesterday" },
];

export const provisioningNodes: ProvisioningNode[] = [
  { name: "mongodb-primary-01", status: "PROVISIONING", progress: 85 },
  { name: "mongodb-replica-01", status: "PENDING", progress: 0 },
];

export const workflowSteps: WorkflowStep[] = [
  { id: "validated", label: "Validated", state: "complete", icon: "check" },
  { id: "provision", label: "Provision", state: "current", icon: "loader" },
  { id: "config", label: "Config", state: "upcoming", icon: "sliders" },
  { id: "security", label: "Security", state: "upcoming", icon: "shield" },
];

export const relatedAssets: RelatedAsset[] = [
  { id: "1", name: "Architecture_Spec_v2.pdf", meta: "PDF • 4.2 MB", kind: "pdf" },
  { id: "2", name: "terraform_vars.json", meta: "JSON • 12 KB", kind: "json" },
];