import { createContext, useContext, useState } from 'react';
import { initialSchedule } from '@/data/mockData';

const ScheduleContext = createContext();

export function ScheduleProvider({ children }) {
  const [globalSchedule, setGlobalSchedule] = useState(initialSchedule);
  
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
