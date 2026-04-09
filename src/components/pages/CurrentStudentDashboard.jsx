import AddCourseDialog from "@/components/AddCourseDialog";
import { EditBadge, ViewAllBadge } from "@/components/Badges";
import { SearchBar } from "@/components/SearchBar";
import { WeeklySchedule } from "@/components/WeeklySchedule";
import GPAGraph from "@/components/GPAGraph";
import { useSchedule } from "@/context/ScheduleContext";
import { currentStudentData } from "@/data/studentData";

export default function CurrentStudentDashboard() {
    const { globalSchedule } = useSchedule();
    
    return (
        <main className="flex flex-col gap-10 w-full h-full pb-20">
               <div className="flex gap-2">
                 <SearchBar />
                 <AddCourseDialog />
               </div>
            <h1 className="text-2xl font-semibold">Hello, {currentStudentData.personalInfo.preferredName}</h1>

            {/* Injected GPA Component mapped to mock database */}

            <div className="py-2">
              <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-light">Upcoming Classes</h2>
                  <div className="flex gap-2">
                      <EditBadge />
                      <ViewAllBadge />
                  </div>
              </div>
              
              <div className="border border-border bg-card rounded-xl shadow-sm p-4 w-full">
                 <WeeklySchedule scheduleData={globalSchedule} />
              </div>
            </div>
            <GPAGraph studentData={currentStudentData} />
        </main>
    )
}