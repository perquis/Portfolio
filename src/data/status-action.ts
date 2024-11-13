import { Checkmark, Danger, Info, Warning } from "@/shared/icons/generals";

const statusActions = [
  { name: "info", Icon: Info },
  { name: "warning", Icon: Warning },
  { name: "error", Icon: Danger },
  { name: "success", Icon: Checkmark },
] as const;

export default statusActions;
