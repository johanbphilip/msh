import { useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { facultiesAndProgramData } from "@/data/mockData";
import { Input } from "../ui/input";
import { Search, ChevronLeft } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ProgramsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState(location.state?.selectedFaculty || null);

  const faculties = facultiesAndProgramData;

  const selectedFacultyData = useMemo(
    () => faculties.find((faculty) => faculty.faculty === selectedFaculty) ?? null,
    [faculties, selectedFaculty]
  );

  const matchingFaculties = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    return faculties.filter((faculty) => {
      if (searchTerm.length === 0) return true;

      const facultyMatches = faculty.faculty.toLowerCase().includes(searchTerm);
      const programMatches = faculty.programs.some((program) =>
        program.name.toLowerCase().includes(searchTerm)
      );

      return facultyMatches || programMatches;
    });
  }, [query, faculties]);

  const visiblePrograms = useMemo(() => {
    if (!selectedFacultyData) return [];

    const searchTerm = query.trim().toLowerCase();

    return selectedFacultyData.programs.filter((program) => {
      if (searchTerm.length === 0) return true;
      return program.name.toLowerCase().includes(searchTerm);
    });
  }, [query, selectedFacultyData]);

return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col bg-background p-6 md:p-10 lg:p-12 text-foreground">
      {/* Expanded container with responsive padding and a wider max-width */}
      
      {/* Header / Search Section */}
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            {selectedFacultyData ? selectedFacultyData.faculty : "Discover Programs"}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {selectedFacultyData 
              ? "Browse available programs within this faculty." 
              : "Search and explore academic faculties and programs."}
          </p>
        </div>

        <div className="relative w-full max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search faculties or programs..."
            className="h-12 rounded-full border-none bg-muted/60 pl-11 pr-4 text-sm shadow-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 pb-16">
        {selectedFacultyData ? (
          <div className="flex flex-col gap-8">
            {/* Back Navigation */}
            <button
              onClick={() => setSelectedFaculty(null)}
              className="flex w-fit items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to all faculties
            </button>

            {/* Programs Grid */}
            {visiblePrograms.length === 0 ? (
              <div className="flex h-40 items-center justify-center rounded-xl border border-dashed">
                <p className="text-muted-foreground">No programs found matching "{query}".</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {visiblePrograms.map((program) => (
                  <Card
                    key={program.name}
                    onClick={() =>
                      navigate("/prospective-student/programs-roadmap", {
                        state: {
                          selectedProgram: program,
                          selectedFaculty: selectedFacultyData.faculty,
                        },
                      })
                    }
                    className="group cursor-pointer flex flex-col p-0 overflow-hidden hover:bg-muted/40 transition-colors text-left border-border"
                  >
                    <div className="aspect-video w-full bg-muted/80 transition-colors group-hover:bg-muted border-b border-border/50" />
                    <CardHeader className="p-4">
                      <CardTitle className="text-base group-hover:text-foreground transition-colors">
                        {program.name}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {program.degree}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {/* Faculties Grid */}
            {matchingFaculties.length === 0 ? (
              <div className="flex h-40 items-center justify-center rounded-xl border border-dashed">
                <p className="text-muted-foreground">No faculties found matching "{query}".</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {matchingFaculties.map((faculty) => (
                  <Card
                    key={faculty.faculty}
                    onClick={() => setSelectedFaculty(faculty.faculty)}
                    className="group cursor-pointer flex flex-col p-0 overflow-hidden hover:bg-muted/40 transition-colors text-left border-border"
                  >
                    <div className="aspect-video w-full bg-muted/80 transition-colors group-hover:bg-muted border-b border-border/50" />
                    <CardHeader className="p-4">
                      <CardTitle className="text-base group-hover:text-foreground transition-colors">
                        {faculty.faculty}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {faculty.programs.length} Programs
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}