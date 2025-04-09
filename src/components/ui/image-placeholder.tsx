interface ImagePlaceholderProps {
  rounded?: "full" | "md";
}

const ImagePlaceholder = ({ rounded = "md" }: ImagePlaceholderProps) => {
  const roundedClass = rounded === "full" ? "rounded-full" : "rounded-md";

  return (
    <div className="p-4">
      <div
        className={`bg-gray-200 h-12 w-full flex items-center justify-center ${roundedClass}`}
      ></div>
    </div>
  );
};

export default ImagePlaceholder;
