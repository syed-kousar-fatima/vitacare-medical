const ActivityTimeline = ({ activities }) => {
  return (
    <div className="w-full bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 sm:p-10 shadow-sm">
      <h4 className="font-cormorant italic font-bold text-2xl 4xl:text-5xl text-slate-900 dark:text-white mb-10">Health Activity</h4>
      <div className="space-y-10 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100 dark:before:bg-slate-800">
        {activities.map((activity, i) => (
          <div key={i} className="relative pl-12 group">
            <div 
              className="absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white dark:border-[#0F172A] z-10 shadow-md transition-transform group-hover:scale-125" 
              style={{ backgroundColor: activity.color }} 
            />
            <div>
              <p className="text-[9px] 4xl:text-lg font-poppins font-black text-[#0EA5E9] uppercase tracking-[0.2em] mb-2">
                {activity.time}
              </p>
              <h5 className="font-poppins font-bold text-slate-900 dark:text-white text-base 4xl:text-3xl mb-1 group-hover:text-[#0EA5E9] transition-colors">
                {activity.title}
              </h5>
              <p className="text-sm 4xl:text-2xl font-poppins text-slate-500 dark:text-slate-400 leading-relaxed">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityTimeline;
