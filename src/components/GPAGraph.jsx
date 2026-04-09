import { useState, useMemo } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export default function GPAGraph({ studentData }) {
  // Extract unique terms that have courseHistory
  const terms = useMemo(() => {
    const termSet = new Set();
    studentData.courseHistory.forEach(course => termSet.add(course.term));
    // Optionally sort logic or reverse logic here, but keeping raw order 
    return Array.from(termSet);
  }, [studentData]);
  
  // Lock to "Winter 2024" matching the image provided, or the most recent
  const [selectedTerm, setSelectedTerm] = useState("Winter 2024");
  
  // Filter courses for chart
  const chartData = useMemo(() => {
    return studentData.courseHistory
      .filter(c => c.term === selectedTerm)
      .map(c => ({
         courseCode: c.courseCode,
         gradePoint: c.gradePoint
      }));
  }, [studentData, selectedTerm]);

  const chartConfig = {
    gradePoint: {
      label: "GPA",
      color: "hsl(var(--border))", // Maps to the nice light grey natively
    },
  };

  return (
      <div className="w-full flex justify-center py-6 pt-10">
        <div className="max-w-3xl w-full flex flex-col items-center">
            
            {/* Header section matching mockup exactly */}
            <div className="text-center mb-16 px-4">
              <h2 className="text-lg text-muted-foreground font-medium mb-2 opacity-90 tracking-wide">Overall GPA (cGPA)</h2>
              <div className="text-[5.5rem] tracking-tighter leading-none mb-3 text-foreground/90 font-normal">
                 A, {studentData.academicInfo.cgpa.toFixed(1)}
              </div>
              <p className="text-[15px] text-muted-foreground">
                 Last updated: <span className="text-foreground">January 2025</span>
              </p>
            </div>
            
            {/* Graph Section */}
            <div className="w-full text-left">
               <div className="flex justify-between items-center mb-8 px-2 pl-4">
                 <h3 className="text-[22px] tracking-tight font-normal text-foreground">{selectedTerm} GPA</h3>
                 <Select value={selectedTerm} onValueChange={setSelectedTerm}>
                   <SelectTrigger className="w-auto min-w-[130px] pr-2 bg-muted/50 border-0 rounded-full font-medium h-8 px-4 text-sm mt-0 shadow-none focus:ring-0">
                     <SelectValue placeholder="Select Term" />
                   </SelectTrigger>
                   <SelectContent>
                     {terms.map(t => (
                       <SelectItem key={t} value={t}>{t}</SelectItem>
                     ))}
                   </SelectContent>
                 </Select>
               </div>
               
               <div className="w-full h-64 relative -ml-4 pr-4"> 
                  <ChartContainer config={chartConfig} className="w-full h-full">
                     <BarChart data={chartData} margin={{ top: 0, right: 0, left: 10, bottom: 25 }}>
                       <YAxis 
                         dataKey="gradePoint" 
                         domain={[0, 4.33]} 
                         ticks={[2.67, 3.0, 3.33, 3.67, 4.0, 4.33]} 
                         axisLine={true} 
                         tickLine={false} 
                         tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 13 }}
                         width={40}
                         interval={1}
                       />
                       <XAxis 
                         dataKey="courseCode" 
                         axisLine={true} 
                         tickLine={false} 
                         tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 13.5 }}
                         dy={10}
                       />
                       <ChartTooltip cursor={{fill: 'transparent'}} content={<ChartTooltipContent />} />
                       {/* Exact visual grey bars matched from screenshot */}
                       <Bar 
                         dataKey="gradePoint" 
                         radius={[2, 2, 0, 0]} 
                         fill="var(--color-gradePoint)" 
                         barSize={40}
                       />
                     </BarChart>
                  </ChartContainer>
               </div>
            </div>

        </div>
      </div>
  );
}
