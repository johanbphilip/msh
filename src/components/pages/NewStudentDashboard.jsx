import { useState } from "react";
import { toast } from "sonner"; 
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WeeklySchedule } from "@/components/WeeklySchedule";
import { useSchedule } from "@/context/ScheduleContext";
import { currentStudentData } from "@/data/studentData"; 
import { CheckCircle2, Clock } from "lucide-react";

export default function NewStudentDashboard() {
  const { globalSchedule } = useSchedule();
  
  // State to handle the interactivity requirement for Assignment 4
  const [isTuitionPaid, setIsTuitionPaid] = useState(false);

  const handlePayTuition = () => {
    setIsTuitionPaid(true);
    toast.success("Payment Received", {
      description: "Your $100.00 tuition deposit has been successfully processed.",
    });
  };

  const handleComingSoon = (feature) => {
    toast.error("Under Development", {
      description: `The ${feature} feature is not implemented in this prototype.`,
    });
  };

  return (
    <main className="flex flex-col gap-10 w-full h-full pb-20 p-6">
      
      {/* Dynamic Header matching the Current Student style */}
      <h1 className="text-2xl font-semibold">
        Welcome, {currentStudentData.personalInfo.preferredName}!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* NEW STUDENT CHECKLIST CARD */}
        <Card>
          <CardHeader>
            <CardTitle>New Student Checklist</CardTitle>
            <CardDescription>Complete these items before orientation.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Interactive Checklist Item 1 (Tuition) */}
            <div className="flex items-center justify-between border-b pb-4">
              <span className="font-medium">Pay Tuition Deposit</span>
              {isTuitionPaid ? (
                <div className="flex items-center text-green-600 font-medium">
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Completed
                </div>
              ) : (
                <Button onClick={handlePayTuition} variant="default">Pay Now</Button>
              )}
            </div>

            {/* Checklist Item 2 (Upload ID) */}
            <div className="flex items-center justify-between border-b pb-4">
              <span className="font-medium">Upload ID Photo</span>
              <Button onClick={() => handleComingSoon("Upload ID")} variant="outline">Upload</Button>
            </div>

            {/* Checklist Item 3 (Course Enrollment) */}
            <div className="flex items-center justify-between border-b pb-4">
              <span className="font-medium">Review Course Enrollment</span>
              <Button onClick={() => handleComingSoon("Course Enrollment")} variant="outline">Review</Button>
            </div>

          </CardContent>
        </Card>

        {/* TUITION & PAYMENTS STATUS CARD */}
        <Card className={isTuitionPaid ? "border-green-200 bg-green-50/30" : "border-border"}>
          <CardHeader>
            <CardTitle>Tuition & Payments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              {isTuitionPaid ? (
                 <CheckCircle2 className="w-8 h-8 text-green-600" />
              ) : (
                 <Clock className="w-8 h-8 text-muted-foreground" />
              )}
              <h2 className="text-2xl font-bold">
                {isTuitionPaid ? "Payment Received" : "Payment Pending"}
              </h2>
            </div>
            
            <div className="text-sm space-y-2 mt-4 text-muted-foreground">
              <p><span className="font-semibold text-foreground">Amount:</span> $100.00 (e.g.)</p>
              <p><span className="font-semibold text-foreground">Deposit for:</span> Tuition Deposit</p>
              <p><span className="font-semibold text-foreground">Date:</span> {new Date().toLocaleDateString()}</p>
              <p><span className="font-semibold text-foreground">Payee:</span> TMU - Financial Services</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SCHEDULE PREVIEW BLOCK */}
      <div className="py-2">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-light">Your Weekly Schedule Preview</h2>
        </div>
        <div className="border border-border bg-card rounded-xl shadow-sm p-4 w-full">
            <WeeklySchedule scheduleData={globalSchedule} />
        </div>
      </div>

    </main>
  );
}