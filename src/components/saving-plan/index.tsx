import SectionHeader from "../ui/section-header";
import PlanItem from "./saving-plan";
import { savingPlans } from "../../constants/saving-plans";

const SavingPlan = () => {
  return (
    <section>
      <SectionHeader title="Saving Plan" viewAllLink="#" />

      <div className="space-y-6">
        {savingPlans.map((plan) => (
          <PlanItem key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default SavingPlan;
