const Loader = ({ fullPage = false }) => {
  const content = (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-[#0EA5E9]/20 dark:border-[#38BDF8]/20 rounded-full" />
        <div className="absolute inset-0 border-4 border-t-[#0EA5E9] dark:border-t-[#38BDF8] rounded-full animate-spin" />
      </div>
      <span className="font-poppins text-sm font-medium text-[#64748B] dark:text-[#94A3B8] animate-pulse">
        Loading...
      </span>
    </div>
  );

  if (fullPage) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F8FAFC] dark:bg-[#020617]">
        {content}
      </div>
    );
  }

  return <div className="flex justify-center p-8">{content}</div>;
};

export default Loader;
