import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function WeeklySchedule({ scheduleData = [] }) {
  return (
    <div className="w-full px-12 mt-6">
      <Carousel
        opts={{ align: "start" }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {scheduleData.map((dayData, index) => {
            const paddedCourses = [...dayData.courses];
            while (paddedCourses.length < 5) paddedCourses.push(null);

            return (
              <CarouselItem key={index} className="pl-4 basis-full md:basis-1/3 xl:basis-1/5">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl mb-1">{dayData.day}</h3>
                  {paddedCourses.map((course, i) => (
                    <div 
                      key={i} 
                      className={`min-h-[70px] p-2 flex flex-col justify-center rounded-md border border-transparent transition-all ${course ? 'bg-muted' : 'bg-muted/50'}`}
                    >
                      {course ? (
                        <>
                          <div className="text-base wrap-break-word font-medium">{course.name}</div>
                          <div className="text-muted-foreground text-xs mt-1">{course.time}</div>
                          <div className="text-muted-foreground text-xs">{course.location}</div>
                        </>
                      ) : null}
                    </div>
                  ))}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
