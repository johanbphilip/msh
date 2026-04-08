import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { mockCourseCatalog } from "@/data/mockData"

export function SwapCourseDialog({ open, onOpenChange, oldCourse, onSwapComplete }) {
  const handleSelect = (selectedCourseName) => {
    const courseObj = mockCourseCatalog.find(c => c.name.toLowerCase() === selectedCourseName.toLowerCase());
    if (courseObj) {
      onSwapComplete(courseObj);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 border-none max-w-xl">
        <DialogHeader className="px-4 pt-4 sr-only">
          <DialogTitle>Swap Course</DialogTitle>
          <DialogDescription>
            Search for a new course to replace {oldCourse?.name || "the current one"}.
          </DialogDescription>
        </DialogHeader>
        <Command className="rounded-lg border shadow-md w-full">
          <CommandInput placeholder={`Swap out ${oldCourse?.name}... Search new course...`} />
          <CommandList className="max-h-80">
            <CommandEmpty>No courses found matching your search.</CommandEmpty>
            <CommandGroup heading="Available Courses">
              {mockCourseCatalog.map((course) => (
                <CommandItem key={course.name} value={course.name} onSelect={handleSelect} className="cursor-pointer py-3">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold">{course.name}</span>
                    <span className="text-xs text-muted-foreground">{course.time} • {course.location}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
