import SectionHeader from "../ui/section-header";
import PlanItem from "./saving-plan";
import { savingPlans } from "../../constants/saving-plans-data";

const SavingPlan = () => {
  return (
    <div>
      <SectionHeader title="Saving Plan" viewAllLink="#" />

      <div className="space-y-6">
        {savingPlans.map((plan) => (
          <PlanItem key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default SavingPlan;
