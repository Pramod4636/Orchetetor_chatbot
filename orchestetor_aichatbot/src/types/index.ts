export type NodeStatus = "PROVISIONING" | "PENDING" | "COMPLETE" | "FAILED";

export interface ProvisioningNode {
  name: string;
  status: NodeStatus;
  progress: number;
}

export interface WorkflowStep {
  id: string;
  label: string;
  state: "complete" | "current" | "upcoming";
  icon: string;
}

export interface RecentChat {
  id: string;
  title: string;
  time: string;
  active?: boolean;
}

export interface RelatedAsset {
  id: string;
  name: string;
  meta: string;
  kind: "pdf" | "json" | "image";
}