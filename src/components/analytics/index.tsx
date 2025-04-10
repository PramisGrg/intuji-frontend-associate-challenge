import AnalyticsChart from "./analytics-card";

const Analytics = () => {
  return (
    <section
      aria-labelledby="analytics-title"
      className="bg-white rounded-lg p-4 border border-gray-200"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 id="analytics-title" className="text-xl font-bold">
          Analytics
        </h2>

        <div className="flex items-center mt-2 sm:mt-0">
          <div className="flex items-center mr-4">
            <span className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></span>
            <span className="text-sm text-gray-600">Label 1</span>
          </div>
          <div className="flex items-center mr-4">
            <span className="w-3 h-3 rounded-full bg-amber-400 mr-2"></span>
            <span className="text-sm text-gray-600">Label 1</span>
          </div>
          <div className="relative">
            <select className="bg-gray-100 text-sm py-1 px-3 rounded-md appearance-none pr-8 focus:outline-none">
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
            <i className="fas fa-chevron-down absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500"></i>
          </div>
        </div>
      </div>

      <div className="h-64">
        <AnalyticsChart />
      </div>
    </section>
  );
};

export default Analytics;
