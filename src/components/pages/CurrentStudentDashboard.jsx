import AddCourseDialog from "@/components/AddCourseDialog";
import { EditBadge, ViewAllBadge } from "@/components/Badges";
import { SearchBar } from "@/components/SearchBar";
import { WeeklySchedule } from "@/components/WeeklySchedule";
import { useSchedule } from "@/context/ScheduleContext";

export default function CurrentStudentDashboard() {
    const { globalSchedule } = useSchedule();
    const user = {
      "name": "Johan",
      "studentId": "123456789",
      "email": "[EMAIL_ADDRESS]",
      "major": "Computer Science",
      "gpa": 4.0,
      "credits": 120,
      "year": 4,
    }
    return (
        <main className="flex flex-col gap-6 w-full h-screen ">
           <h1 className="text-2xl font-semibold">Hello, {user.name}</h1>
           <div className="flex gap-2">
            <SearchBar />
            <AddCourseDialog />
           </div>
           <div className="py-2.5">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-light">Upcoming Classes</h2>
                <div className="flex gap-2">
                    <EditBadge />
                    <ViewAllBadge />
                </div>
            </div>
            
            <WeeklySchedule scheduleData={globalSchedule} />
            </div>
        </main>
    )
}