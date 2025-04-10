interface SectionHeaderProps {
  title: string;
  viewAllLink: string;
}

const SectionHeader = ({ title, viewAllLink }: SectionHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      {viewAllLink && (
        <a
          href={viewAllLink}
          className="text-indigo-600 text-sm hover:underline"
        >
          See All
        </a>
      )}
    </div>
  );
};

export default SectionHeader;
