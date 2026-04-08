import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { XCircle, PlusCircle } from "lucide-react"

export function CourseChecklist({ courses, activeCourses, onToggleCourse, onRemoveSelected }) {
   const [searchQuery, setSearchQuery] = useState("");

   const filteredCourses = courses.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));

   const handleRemove = () => {
       onRemoveSelected();
   }

   return (
       <div className="flex flex-col gap-4 mt-8">
           
           <h2 className="text-2xl font-semibold mb-2">Courses</h2>
           
           <div className="w-full relative">
              <input 
                placeholder="Search For A Course" 
                className="w-full p-2.5 px-4 bg-muted border border-border/50 rounded-full text-sm outline-none focus:ring-2 focus:ring-ring"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-4 top-3 text-muted-foreground text-xs font-bold">⚲</div>
           </div>

           <div className="flex flex-col gap-3 max-h-[500px] overflow-y-auto pr-2 mt-4">
               {filteredCourses.map((c) => (
                   <div key={c.name} className="flex items-start gap-4 auto-rows-min">
                       <Checkbox 
                         className="mt-6 ml-1" 
                         checked={activeCourses.has(c.name)} 
                         onCheckedChange={(checked) => onToggleCourse(c.name, checked)} 
                       />
                       <div className="flex-1 bg-muted/60 hover:bg-muted/80 transition-colors rounded-xl p-4 flex items-center gap-4">
                           <div className="h-10 w-10 min-w-10 bg-background rounded-full shadow-sm flex items-center justify-center text-xs font-medium text-muted-foreground uppercase">
                             {c.name.substring(0,2)}
                           </div>
                           <div className="flex flex-col gap-1.5 w-full text-sm">
                               <div className="font-semibold text-base mb-1">{c.name}</div>
                               <div className="bg-background/80 w-3/4 h-3 rounded-full"></div>
                               <div className="bg-background/80 w-1/2 h-3 rounded-full"></div>
                               <div className="bg-background/80 w-2/3 h-3 rounded-full"></div>
                           </div>
                       </div>
                   </div>
               ))}
               {filteredCourses.length === 0 && (
                 <div className="text-center text-muted-foreground py-8">No courses found matching your search.</div>
               )}
           </div>

           <div className="flex justify-center gap-4 py-6 mt-2">
              <AlertDialog>
                 <AlertDialogTrigger asChild>
                    <Button variant="secondary" className="gap-2 rounded-full px-6 shadow-sm border border-border/50" disabled={activeCourses.size === 0}>
                       <XCircle className="w-4 h-4"/> Remove Selected
                    </Button>
                 </AlertDialogTrigger>
                 <AlertDialogContent>
                    <AlertDialogHeader>
                       <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                       <AlertDialogDescription>
                          This will permanently delete the selected courses from your schedule layout workspace.
                       </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                       <AlertDialogCancel>Cancel</AlertDialogCancel>
                       <AlertDialogAction onClick={handleRemove} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                         Yes, Remove
                       </AlertDialogAction>
                    </AlertDialogFooter>
                 </AlertDialogContent>
              </AlertDialog>
              
              <Button variant="secondary" className="gap-2 rounded-full px-6 shadow-sm border border-border/50">
                 <PlusCircle className="w-4 h-4"/> Add Selected
              </Button>
           </div>
       </div>
   )
}
