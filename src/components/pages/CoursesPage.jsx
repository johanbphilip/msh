import { useState } from "react";
import { mockCourseCatalog } from "@/data/mockData";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Plus, Minus, ShoppingCart, CalendarPlus, Clock, MapPin, User, CheckCircle2 } from "lucide-react";
import { useSchedule } from "@/context/ScheduleContext";

// Time Conflict Helper
function parseTime(timeStr) {
  const [start, end] = timeStr.split(" - ");
  const convert = (t) => {
    let num = parseInt(t);
    if (t.includes("PM") && num !== 12) num += 12;
    if (t.includes("AM") && num === 12) num = 0;
    return num;
  };
  return { start: convert(start), end: convert(end) };
}

function checkConflict(newCourse, schedule) {
  const dayObj = schedule.find(s => s.day === newCourse.day);
  if (!dayObj) return false;

  const currentBounds = parseTime(newCourse.time);
  
  for (const existing of dayObj.courses) {
    const existingBounds = parseTime(existing.time);
    if (currentBounds.start < existingBounds.end && currentBounds.end > existingBounds.start) {
      return { conflict: true, with: existing.name };
    }
  }
  return false;
}

export default function CoursesPage() {
  const { globalSchedule, setGlobalSchedule } = useSchedule();
  const [cart, setCart] = useState([]);

  const toggleCart = (course) => {
    if (cart.find(c => c.id === course.id)) {
      setCart(cart.filter(c => c.id !== course.id));
    } else {
      setCart([...cart, course]);
    }
  };

  const handleSaveToSchedule = () => {
    if (cart.length === 0) return;

    // We process sequentially, maintaining a deep copy of the schedule state
    let updatedSchedule = JSON.parse(JSON.stringify(globalSchedule));
    let successfullyAdded = [];
    let conflicts = [];

    cart.forEach(courseItem => {
      const conflictCheck = checkConflict(courseItem, updatedSchedule);
      
      if (conflictCheck) {
        conflicts.push({ name: courseItem.courseCode, with: conflictCheck.with });
      } else {
        // Add it
        const dayIndex = updatedSchedule.findIndex(d => d.day === courseItem.day);
        const insertionObj = {
          name: `${courseItem.courseCode} - 011 LEC`, // Append suffix to matche format
          time: courseItem.time,
          location: courseItem.location
        };

        if (dayIndex !== -1) {
          updatedSchedule[dayIndex].courses.push(insertionObj);
        } else {
          updatedSchedule.push({ day: courseItem.day, courses: [insertionObj] });
        }
        successfullyAdded.push(courseItem.courseCode);
      }
    });

    if (successfullyAdded.length > 0) {
      setGlobalSchedule(updatedSchedule);
      toast.success(`Successfully enrolled in ${successfullyAdded.length} course(s).`);
    }

    if (conflicts.length > 0) {
      conflicts.forEach(c => {
        toast.error(`Scheduling Conflict: ${c.name} overlaps with ${c.with}. It was not added.`);
      });
    }

    // Clear cart
    setCart([]);
  };

  // Johan Philip's Computer Science mandatory courses checklist mapping
  const mandatoryCourses = ["CPS 109", "CPS 209", "CPS 506", "CPS 616", "CPS 706", "CPS 803", "CPS 843", "MTH 108"];

  // Filter out courses that are already in the global schedule
  const availableCourses = mockCourseCatalog.filter(course => {
    return !globalSchedule.some(dayObj => 
      dayObj.courses.some(enrolled => enrolled.name.includes(course.courseCode))
    );
  });

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] w-full">
      <div className="flex-1 overflow-y-auto bg-muted/10 p-6 md:p-10 relative">
        <div className="max-w-6xl mx-auto pb-32">
          
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">Course Catalog</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Browse available courses below. Add them to your cart, and when you're ready, hit save to auto-check against your current schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableCourses.map(course => {
              const inCart = cart.find(c => c.id === course.id);
              const isMandatory = mandatoryCourses.includes(course.courseCode);
              
              return (
                <Card key={course.id} className={`transition-all duration-200 ${inCart ? 'border-primary shadow-sm bg-primary/5' : 'border-border/50 hover:border-border'}`}>
                   <CardHeader className="pb-3 relative space-y-1">
                     <div className="flex justify-between items-start">
                        <div className="flex gap-2 items-center">
                          <Badge variant="secondary" className="font-mono text-xs bg-muted">{course.courseCode}</Badge>
                          {isMandatory && <Badge variant="default" className="text-[10px] uppercase h-5 px-1.5 bg-blue-600/90 text-white">Mandatory</Badge>}
                        </div>
                        {inCart && <CheckCircle2 className="h-5 w-5 text-primary" />}
                     </div>
                     <CardTitle className="text-lg leading-tight mt-1">{course.name}</CardTitle>
                     <CardDescription className="text-xs font-medium">Credits: {course.credits}</CardDescription>
                   </CardHeader>
                   <CardContent className="pb-4">
                      <div className="flex flex-col gap-2 text-sm text-foreground/80 mt-2">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span>{course.prof}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium text-foreground">{course.day}s, {course.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{course.location}</span>
                        </div>
                      </div>
                   </CardContent>
                   <CardFooter className="pt-0">
                      <Button 
                        variant={inCart ? "outline" : "default"} 
                        className="w-full font-medium" 
                        onClick={() => toggleCart(course)}
                      >
                         {inCart ? (
                           <><Minus className="mr-2 h-4 w-4" /> Remove from Cart</>
                         ) : (
                           <><Plus className="mr-2 h-4 w-4" /> Add to Cart</>
                         )}
                      </Button>
                   </CardFooter>
                </Card>
              );
            })}
            
            {availableCourses.length === 0 && (
              <div className="col-span-full py-20 text-center text-muted-foreground">
                <p>All catalog courses successfully mapped locally.</p>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Floating Subtle Cart Bar */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 transform ${cart.length > 0 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}`}>
         <div className="bg-background rounded-full px-6 py-3 shadow-2xl flex items-center gap-6">
            <div className="flex items-center gap-3">
               <div className="relative">
                 <ShoppingCart className="h-5 w-5" />
                 <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                   {cart.length}
                 </span>
               </div>
               <span className="font-medium text-sm hidden sm:inline">Ready to Save</span>
            </div>
            
            <div className="h-6 w-px bg-background/20" />
            
            <div className="flex items-center gap-2">
               <Button variant="ghost" size="sm" onClick={() => setCart([])} className="h-8 hover:bg-background/20 hover:text-background text-background/80 rounded-full px-3">
                 Clear
               </Button>
               <Button onClick={handleSaveToSchedule} size="sm" className="h-8 rounded-full bg-background text-foreground hover:bg-muted shadow-sm px-4 whitespace-nowrap">
                  Save to Schedule
               </Button>
            </div>
         </div>
      </div>
    </div>
  );
}
