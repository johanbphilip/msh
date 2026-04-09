import { useNavigate } from "react-router";
import { facultiesAndProgramData } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, GraduationCap, Building2, Globe2 } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ProspectiveStudentDashboard() {
  const navigate = useNavigate();

  const highlightedFaculties = facultiesAndProgramData.slice(0, 4);

  return (
    <div className="flex flex-col w-full min-h-screen bg-background text-foreground pb-20">
      
      <section className="relative w-full py-20 px-6 md:px-12 flex flex-col items-center justify-center text-center border-b border-border">
         <div className="absolute inset-0 w-full h-full bg-muted/30 -z-10" />
         <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl mb-6">
           Discover Your Future at TMU
         </h1>
         
         <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
           <Button onClick={() => navigate("/prospective-student/programs")} size="lg" className="rounded-full px-8">
             Explore Programs
           </Button>
           <Button onClick={() => navigate("/prospective-student/admissions")} variant="outline" size="lg" className="rounded-full px-8">
             How to Apply
           </Button>
         </div>
      </section>

      <section className="px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
           <Card className="flex flex-col hover:shadow-md transition-shadow">
             <CardHeader className="flex-1">
               <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center mb-2">
                 <BookOpen className="h-6 w-6 text-foreground" />
               </div>
               <CardTitle className="text-xl">Academic Programs</CardTitle>
               <CardDescription>
                 Browse through over 60 undergraduate programs designed to jumpstart your career with hands-on experience.
               </CardDescription>
             </CardHeader>
             <CardFooter>
               <Button variant="link" onClick={() => navigate("/prospective-student/programs")} className="p-0 h-auto text-foreground font-medium flex gap-2 items-center group">
                 View Programs <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
               </Button>
             </CardFooter>
           </Card>
           
           <Card className="flex flex-col hover:shadow-md transition-shadow">
             <CardHeader className="flex-1">
               <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center mb-2">
                 <Building2 className="h-6 w-6 text-foreground" />
               </div>
               <CardTitle className="text-xl">Admissions & Tours</CardTitle>
               <CardDescription>
                 Review admission requirements, track your application, or book a guided campus tour.
               </CardDescription>
             </CardHeader>
             <CardFooter>
               <Button variant="link" onClick={() => navigate("/prospective-student/admissions")} className="p-0 h-auto text-foreground font-medium flex gap-2 items-center group">
                 Learn about Admissions <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
               </Button>
             </CardFooter>
           </Card>

           <Card className="flex flex-col hover:shadow-md transition-shadow">
             <CardHeader className="flex-1">
               <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center mb-2">
                 <GraduationCap className="h-6 w-6 text-foreground" />
               </div>
               <CardTitle className="text-xl">Financial Aid</CardTitle>
               <CardDescription>
                 Explore scholarships, awards, and financial assistance designed to support your academic journey.
               </CardDescription>
             </CardHeader>
             <CardFooter>
               <Button variant="link" onClick={() => navigate("/prospective-student/financial-aid")} className="p-0 h-auto text-foreground font-medium flex gap-2 items-center group">
                 Explore Funding <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
               </Button>
             </CardFooter>
           </Card>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
             <div>
                <h2 className="text-3xl font-semibold">Explore our Faculties</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl">TMU is organized into six major faculties, each offering distinct pathways to your future.</p>
             </div>
             <Button onClick={() => navigate("/prospective-student/programs")} variant="outline" className="rounded-full">
                View All Programs
             </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlightedFaculties.map((fac) => (
               <Card 
                 key={fac.faculty} 
                 onClick={() => navigate("/prospective-student/programs", { state: { selectedFaculty: fac.faculty } })}
                 className="group cursor-pointer hover:bg-muted/40 transition-colors overflow-hidden flex flex-col p-0"
               >
                 <div className="aspect-4/3 w-full bg-muted/80 border-b border-border transition-colors group-hover:bg-muted" />
                 <CardHeader className="p-4">
                   <CardTitle className="text-base group-hover:text-foreground transition-colors">{fac.faculty}</CardTitle>
                   <CardDescription className="mt-1">{fac.programs.length} Programs</CardDescription>
                 </CardHeader>
               </Card>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}
