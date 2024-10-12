import { observable } from "@legendapp/state";

interface RegisterFlowState {
  mode: "signup" | "signin";
  name: string;
  email?: string;
}

export const registerFlowState = observable<RegisterFlowState>();
