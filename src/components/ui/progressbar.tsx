interface ProgressBarProps {
  percentage: number;
  color: "success" | "warning" | "default" | "primary";
}

const ProgressBar = ({ percentage, color }: ProgressBarProps) => {
  const bgColorMap: Record<string, string> = {
    success: "bg-success",
    warning: "bg-warning",
    default: "bg-primary",
  };

  const textColorMap: Record<string, string> = {
    success: "text-success",
    warning: "text-warning",
    default: "text-primary",
  };

  const bgColor = bgColorMap[color] ?? bgColorMap.default;
  const textColor = textColorMap[color] ?? textColorMap.default;

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${bgColor}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className={`text-sm font-bold ${textColor}`}>{percentage}%</span>
    </div>
  );
};

export default ProgressBar;
