const DoctorSkeleton = () => {
  return (
    <div className="bg-white dark:bg-[#0F172A] rounded-[2.5rem] border border-slate-200 dark:border-slate-800 overflow-hidden animate-pulse">
      <div className="aspect-[4/5] bg-slate-100 dark:bg-slate-900" />
      <div className="p-8 space-y-6">
        <div className="flex justify-between">
          <div className="h-6 w-20 bg-slate-100 dark:bg-slate-900 rounded-lg" />
          <div className="h-6 w-16 bg-slate-100 dark:bg-slate-900 rounded-lg" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="h-12 bg-slate-100 dark:bg-slate-900 rounded-xl" />
          <div className="h-12 bg-slate-100 dark:bg-slate-900 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default DoctorSkeleton;
