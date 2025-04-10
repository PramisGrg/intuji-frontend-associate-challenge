import { TSavingPlanResponse } from "../../types/saving.plan";
import ProgressBar from "../ui/progressbar";

const PlanItem = ({ plan }: TSavingPlanResponse) => {
  return (
    <section>
      <header className="flex justify-between pb-2">
        <h3 className="font-medium">{plan.title}</h3>
        <span className="text-xs text-gray-500">Target: {plan.targetDate}</span>
      </header>

      <div className="flex items-baseline mb-2">
        <span className="font-bold">${plan.saved}</span>
        <span className="text-xs text-gray-500 ml-1">/ ${plan.goal}</span>
      </div>

      <ProgressBar percentage={plan.percentage} color={plan.color} />
    </section>
  );
};

export default PlanItem;
