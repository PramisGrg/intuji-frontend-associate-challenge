interface SectionHeaderProps {
  title: string;
  viewAllLink: string;
}

const SectionHeader = ({ title, viewAllLink }: SectionHeaderProps) => {
  return (
    <header className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      {viewAllLink && (
        <a href={viewAllLink} className="text-primary text-sm hover:underline">
          See All
        </a>
      )}
    </header>
  );
};

export default SectionHeader;
