const AvailabilityBadge = ({ isAvailable }) => {
  return (
    <div className="flex items-center gap-1.5">
      <span className={`relative flex h-2 w-2`}>
        {isAvailable && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${isAvailable ? 'bg-[#10B981]' : 'bg-[#64748B] dark:bg-[#94A3B8]'}`}></span>
      </span>
      <span className={`text-xs font-poppins font-medium ${isAvailable ? 'text-[#10B981]' : 'text-[#64748B] dark:text-[#94A3B8]'}`}>
        {isAvailable ? 'Available Today' : 'Next Available: Tomorrow'}
      </span>
    </div>
  );
};

export default AvailabilityBadge;
