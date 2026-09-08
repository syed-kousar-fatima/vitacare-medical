import { Bell, CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

const NotificationPanel = ({ notifications }) => {
  const getIcon = (type) => {
    switch(type) {
      case 'success': return <CheckCircle2 className="text-[#10B981]" size={18} />;
      case 'warning': return <AlertCircle className="text-[#F59E0B]" size={18} />;
      case 'info': return <Info className="text-[#0EA5E9]" size={18} />;
      default: return <Bell className="text-slate-400" size={18} />;
    }
  };

  return (
    <div className="w-full bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden shadow-sm">
      <div className="p-8 border-b border-slate-50 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/20">
        <h4 className="font-cormorant italic font-bold text-2xl 4xl:text-5xl text-slate-900 dark:text-white">Notifications</h4>
        <button className="text-[10px] 4xl:text-lg font-poppins font-black uppercase tracking-widest text-[#0EA5E9]">Mark all read</button>
      </div>
      <div className="max-h-[500px] overflow-y-auto no-scrollbar">
        {notifications.map((note, i) => (
          <div key={i} className={`p-6 flex items-start gap-5 border-b border-slate-50 dark:border-slate-800 hover:bg-[#F8FAFC] dark:hover:bg-[#020617] transition-colors cursor-pointer ${!note.isRead ? 'bg-[#0EA5E9]/5' : ''}`}>
            <div className="mt-1 shrink-0 p-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm">{getIcon(note.type)}</div>
            <div className="flex-1">
              <p className="text-sm 4xl:text-2xl font-poppins font-bold text-slate-900 dark:text-white mb-1">{note.title}</p>
              <p className="text-xs 4xl:text-xl font-poppins text-slate-500 dark:text-slate-400 leading-relaxed">{note.message}</p>
              <p className="text-[9px] 4xl:text-lg font-poppins font-black text-slate-300 mt-3 uppercase tracking-widest">{note.time}</p>
            </div>
            {!note.isRead && <div className="w-2 h-2 rounded-full bg-[#0EA5E9] mt-2 animate-pulse" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPanel;
