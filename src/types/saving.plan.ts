export interface TSavingPlan {
  id: number;
  title: string;
  targetDate: string;
  saved: number;
  goal: number;
  percentage: number;
  color: string;
}

export interface TSavingPlanResponse {
  plan: TSavingPlan;
}
