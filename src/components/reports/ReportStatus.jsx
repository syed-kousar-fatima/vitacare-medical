const ReportStatus = ({ status }) => {
  const variants = {
    completed: 'bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20',
    pending: 'bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20',
    cancelled: 'bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/20',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-poppins font-bold border uppercase tracking-wider ${variants[status.toLowerCase()] || variants.pending}`}>
      {status}
    </span>
  );
};

export default ReportStatus;
