import { createContext, useContext, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((notification) => {
    const id = Math.random().toString(36).substr(2, 9);
    setNotifications(prev => [...prev, { ...notification, id }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  }, []);

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      <div className="fixed bottom-8 right-0 z-[100] w-full max-w-sm pointer-events-none px-4 md:px-8">
        <div className="flex flex-col gap-3">
          <AnimatePresence>
            {notifications.map((note) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                className="pointer-events-auto w-full bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#334155] rounded-2xl p-4 shadow-2xl flex items-start gap-4"
              >
                <div className={`mt-0.5 ${
                  note.type === 'success' ? 'text-[#10B981]' : 
                  note.type === 'error' ? 'text-[#EF4444]' : 'text-[#0EA5E9]'
                }`}>
                  {note.type === 'success' && <CheckCircle size={20} />}
                  {note.type === 'error' && <AlertCircle size={20} />}
                  {note.type === 'info' && <Info size={20} />}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-poppins font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                    {note.title}
                  </h4>
                  <p className="text-xs font-poppins text-[#64748B] dark:text-[#94A3B8] mt-1">
                    {note.message}
                  </p>
                </div>
                <button 
                  onClick={() => removeNotification(note.id)}
                  className="text-[#64748B] hover:text-[#0F172A] dark:hover:text-[#F8FAFC]"
                >
                  <X size={16} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error('useNotification must be used within a NotificationProvider');
  return context;
};
