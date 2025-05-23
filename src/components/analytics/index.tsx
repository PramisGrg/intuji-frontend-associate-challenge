import AnalyticsCard from "./analytics-card";
import { ChevronDown } from "lucide-react";
import { analyticsData } from "../../constants/analytics-data";

const Analytics = () => {
  return (
    <div className="mb-6">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold">Analytics</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
            <span className="text-sm text-neutral-500">Label 1</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
            <span className="text-sm text-neutral-500">Label 2</span>
          </div>

          <button className="flex items-center bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm">
            <span>Weekly</span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>
        </div>
      </header>

      <article>
        <AnalyticsCard analytics={analyticsData} />
      </article>
    </div>
  );
};

export default Analytics;
