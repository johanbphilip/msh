import { createContext, useContext, useState, useEffect } from 'react';
import { initialSchedule } from '@/data/mockData';

const ScheduleContext = createContext();

export function ScheduleProvider({ children }) {
  const [globalSchedule, setGlobalSchedule] = useState(() => {
    const saved = localStorage.getItem('globalSchedule');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        console.error("Failed parsing schedule from local storage");
      }
    }
    return initialSchedule;
  });

  useEffect(() => {
    localStorage.setItem('globalSchedule', JSON.stringify(globalSchedule));
  }, [globalSchedule]);
  
  return (
    <ScheduleContext value={{ globalSchedule, setGlobalSchedule }}>
      {children}
    </ScheduleContext>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSchedule() {
  return useContext(ScheduleContext);
}
