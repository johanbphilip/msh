import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { CirclePlus } from "lucide-react"
import { mockCourseCatalog } from "@/data/mockData"

export default function AddCourseDialog({ onAddCourse }) {
    const [open, setOpen] = useState(false);

    const handleSelect = (selectedCourseName) => {
        const courseObj = mockCourseCatalog.find(c => c.name.toLowerCase() === selectedCourseName.toLowerCase());
        if (courseObj && onAddCourse) {
            onAddCourse(courseObj);
        }
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="w-1/5 gap-2 font-light">Add Course <CirclePlus /></Button>
            </DialogTrigger>
            <DialogContent className="p-0 border-none max-w-xl">
                <DialogHeader className="px-4 pt-4 sr-only">
                    <DialogTitle>Add Course</DialogTitle>
                    <DialogDescription>
                        Add a course to your schedule.
                    </DialogDescription>
                </DialogHeader>
                <Command className="rounded-lg border shadow-md w-full">
                    <CommandInput placeholder="Search for a course to add..." />
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
    )
}