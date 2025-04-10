interface ProgressBarProps {
  percentage: number;
  color: string;
}

const ProgressBar = ({ percentage, color }: ProgressBarProps) => {
  let colorClass = "bg-indigo-600";

  if (color === "warning") {
    colorClass = "bg-amber-500";
  } else if (color === "success") {
    colorClass = "bg-green-500";
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${colorClass}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span
        className={`text-sm font-bold ${
          color === "warning"
            ? "text-warning"
            : color === "success"
            ? "text-success"
            : "text-primary"
        }`}
      >
        {percentage}%
      </span>
    </div>
  );
};

export default ProgressBar;
