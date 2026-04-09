import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { programRoadmaps } from "@/data/mockData";

export default function ProgramRoadmapPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const selectedProgramName = state?.selectedProgram?.name;

  const currentRoadmap = useMemo(() => {
    if (selectedProgramName && programRoadmaps[selectedProgramName]) {
      return programRoadmaps[selectedProgramName];
    }

    return programRoadmaps["Computer Science"];
  }, [selectedProgramName]);

  const defaultExpandedYear = currentRoadmap?.years?.[1]?.id ?? currentRoadmap?.years?.[0]?.id ?? null;

  const [expandedYear, setExpandedYear] = useState(defaultExpandedYear);

  useEffect(() => {
    setExpandedYear(defaultExpandedYear);
  }, [defaultExpandedYear, currentRoadmap]);

  const toggleYear = (id) => {
    setExpandedYear(expandedYear === id ? null : id);
  };

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col bg-background p-4 sm:p-8 md:p-12 text-foreground relative">
      
      {/* Program Info & Hero */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{currentRoadmap.title}</h1>
        {/* Gray Hero Placeholder - Taller on larger screens */}
        <div className="aspect-3/1 w-full rounded-lg bg-[#e5e5e5] md:aspect-4/1" />
      </div>

      {/* Timeline Layout Area */}
      <div className="relative mt-12 w-full max-w-3xl self-center pr-12 pb-16">
        
        {/* The Continuous Vertical Timeline Line */}
        <div className="absolute bottom-0 right-4 top-4 w-px bg-foreground/30" />

        <div className="flex flex-col gap-6 md:gap-8">
          {currentRoadmap.years.map((year) => {
            const isExpanded = expandedYear === year.id;

            return (
              <div key={year.id} className="relative w-full">
                {/* Timeline Arrow pointing to the box */}
                <div className="absolute -right-12 top-1/2 flex -translate-y-1/2 items-center">
                  <ArrowLeft className="h-5 w-5 text-foreground/50" strokeWidth={1.5} />
                  <div className="h-px w-6 bg-foreground/30" />
                </div>

                {/* Year Accordion Button */}
                <button
                  onClick={() => toggleYear(year.id)}
                  className="flex w-full items-center justify-center gap-4 bg-[#e5e5e5] py-6 transition-colors hover:bg-[#d4d4d4] rounded-md shadow-sm"
                >
                  <span className="text-xl font-medium tracking-wide md:text-2xl">{year.label}</span>
                  {isExpanded ? (
                    <ChevronUp className="h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
                  )}
                </button>

{/* Expanded Course List */}
{isExpanded && (
  <div className="mt-3 flex flex-col gap-6 bg-[#f4ecec] p-6 md:p-8 rounded-md shadow-inner">
    {year.courses.map((course) => (
      <button
        key={course.id}
                        onClick={() =>
                          navigate("/prospective-student/course-reviews", {
                            state: {
                              selectedCourse: course,
                              selectedProgramTitle: currentRoadmap.title,
                              selectedProgramName,
                            },
                          })
                        }
        className="group flex w-fit items-start gap-3 text-left md:items-center"
      >
        <div className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-foreground/70 transition-colors group-hover:bg-primary md:mt-0" />
        <span className="text-base font-medium underline decoration-muted-foreground/50 underline-offset-4 transition-colors group-hover:text-primary group-hover:decoration-primary md:text-lg">
          {/* Added the course.id (Course Code) right here! */}
          <span className="mr-2 font-bold uppercase tracking-wide">
            {course.id}:
          </span>
          {course.name}
        </span>
      </button>
    ))}
  </div>
)}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}