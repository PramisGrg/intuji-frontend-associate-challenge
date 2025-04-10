export interface TSavingPlan {
  id: number;
  title: string;
  targetDate: string;
  saved: number;
  goal: number;
  percentage: number;
  color: "success" | "warning" | "primary";
}

export interface TSavingPlanResponse {
  plan: TSavingPlan;
}
