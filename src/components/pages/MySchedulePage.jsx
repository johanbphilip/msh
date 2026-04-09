import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router";
import { WeeklySchedule } from "@/components/WeeklySchedule";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useSchedule } from "@/context/ScheduleContext";
import { toast } from "sonner";
import { Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import { CourseChecklist } from "@/components/CourseChecklist";

export default function MySchedulePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isEditing = searchParams.get('edit') === 'true';
  const { globalSchedule, setGlobalSchedule } = useSchedule();
  
  const [draftSchedule, setDraftSchedule] = useState(globalSchedule);
  const [activeCourses, setActiveCourses] = useState(new Set());
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    if (!isEditing) {
      // eslint-disable-next-line
      setDraftSchedule(globalSchedule);
      
      const initialActive = new Set();
      globalSchedule.forEach(day => {
        day.courses.forEach(c => initialActive.add(c.name));
      });
      setActiveCourses(initialActive);
      setHasChanges(false);
    }
  }, [isEditing, globalSchedule]);

  const handleEditToggle = (checked) => {
    if (!checked && hasChanges) {
       setDraftSchedule(globalSchedule);
       setHasChanges(false);
    }
    setSearchParams(checked ? { edit: 'true' } : {});
  };

  const previewSchedule = useMemo(() => {
     return draftSchedule.map(day => ({
         ...day,
         courses: day.courses.filter(c => activeCourses.has(c.name))
     }));
  }, [draftSchedule, activeCourses]);

  const flatDraftCourses = useMemo(() => {
     return draftSchedule.flatMap(d => d.courses.map(c => ({...c, day: d.day})));
  }, [draftSchedule]);

  const handleToggleCourse = (courseName, isChecked) => {
    setActiveCourses(prev => {
       const next = new Set(prev);
       if (isChecked) next.add(courseName);
       else next.delete(courseName);
       return next;
    });
    setHasChanges(true);
  };

  const handleRemoveSelected = () => {
    setDraftSchedule(prev => prev.map(day => ({
       ...day,
       courses: day.courses.filter(c => !activeCourses.has(c.name))
    })));
    setActiveCourses(new Set());
    setHasChanges(true);
    toast.success("Courses removed from draft.");
  };

  const saveChanges = () => {
    // Only save the active previewSchedule, dropping anything that was removed/unchecked
    setGlobalSchedule(previewSchedule);
    setHasChanges(false);
    toast.success("Schedule successfully saved!");
    handleEditToggle(false);
  };

  const cancelChanges = () => {
    setDraftSchedule(globalSchedule);
    setHasChanges(false);
    handleEditToggle(false);
  };

  return (
    <div className="flex flex-col gap-6 w-full min-h-screen mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">My Courses</h1>
        
        <div className="flex items-center justify-end gap-4">
          <div className="flex items-center space-x-2 bg-muted/30 p-2 px-4 rounded-3xl border border-muted">
            <Switch 
              id="edit-mode" 
              checked={isEditing} 
              onCheckedChange={handleEditToggle} 
            />
            <Label htmlFor="edit-mode" className="cursor-pointer">{isEditing ? "Editing Schedule" : "View Schedule"}</Label>
          </div>
          
          {isEditing && (
            <div className="flex items-center space-x-2">
              <Button size="sm" variant="outline" onClick={cancelChanges} disabled={!hasChanges}>
                 <X className="w-4 h-4 mr-1"/> Cancel
              </Button>
              <Button size="sm" onClick={saveChanges} disabled={!hasChanges}>
                <Check className="w-4 h-4 mr-1"/> Save
              </Button>
            </div>
          )}
        </div>
      </div>
      

      <div className="bg-card w-full border border-muted rounded-xl shadow-sm p-4 overflow-hidden">
        <WeeklySchedule scheduleData={isEditing ? previewSchedule : globalSchedule} />
      </div>

      {isEditing && (
        <CourseChecklist 
           courses={flatDraftCourses}
           activeCourses={activeCourses}
           onToggleCourse={handleToggleCourse}
           onRemoveSelected={handleRemoveSelected}
        />
      )}
    </div>
  );
}
