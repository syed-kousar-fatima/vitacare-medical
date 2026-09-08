const EmptyState = ({ title, description, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-[#E2E8F0] dark:border-[#334155] rounded-3xl">
      {Icon && (
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F8FAFC] dark:bg-[#1E293B] text-[#64748B] dark:text-[#94A3B8] mb-4">
          <Icon size={32} />
        </div>
      )}
      <h3 className="text-lg font-semibold font-cormorant italic text-[#0F172A] dark:text-[#F8FAFC]">
        {title}
      </h3>
      <p className="mt-2 text-sm font-poppins text-[#64748B] dark:text-[#94A3B8] max-w-xs">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;
