import { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router";
import { ArrowLeft, Star, Search, User, ShoppingCart } from "lucide-react";
import { Input } from "../ui/input";
import { courseData } from "@/data/mockData";

export default function CourseReviewPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const selectedCourse = state?.selectedCourse;
  const selectedProgramTitle = state?.selectedProgramTitle;

  const activeCourse = {
    id: selectedCourse?.id ?? courseData.id,
    name: selectedCourse?.name ?? courseData.name,
    roadmap: selectedCourse?.roadmap ?? [],
    description: courseData.description,
  };

  // Filter reviews based on search input
  const filteredReviews = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return courseData.reviews;
    
    return courseData.reviews.filter(review => 
      review.text.toLowerCase().includes(query) || 
      review.author.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Helper to render star icons
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 md:h-5 md:w-5 ${i < Math.floor(rating) ? 'fill-primary text-primary' : 'fill-muted text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col bg-background p-4 sm:p-8 md:p-12 text-foreground relative pb-28">
      
      {/* Header & Navigation */}
      <button
        type="button"
        onClick={() => navigate("/prospective-student/programs-roadmap", { state })}
        className="mb-6 flex w-fit items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to Roadmap
      </button>

      <div className="border-b pb-4 mb-6">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{activeCourse.id}</h1>
        <h2 className="text-lg text-muted-foreground mt-1">{activeCourse.name}</h2>
        {selectedProgramTitle && (
          <p className="mt-2 text-sm text-muted-foreground">{selectedProgramTitle}</p>
        )}
      </div>

      {activeCourse.roadmap.length > 0 && (
        <div className="mb-10 rounded-xl border border-muted bg-muted/20 p-5 md:p-6">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Course Roadmap
          </h3>
          <div className="relative ml-3 border-l-2 border-muted pl-7">
            <div className="flex flex-col gap-6">
              {activeCourse.roadmap.map((step, index) => (
                <div key={step} className="relative">
                  <div className="absolute -left-10 top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background text-xs font-semibold text-primary">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium md:text-base">{step}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Module {index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Course Description block (Matches the top gray wireframe box) */}
      <div className="rounded-xl bg-muted/40 p-5 md:p-6 mb-10">
        <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
          {activeCourse.description}
        </p>
      </div>

      {/* Ratings Section */}
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Ratings</h3>
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 rounded-xl bg-muted/30 p-6 md:p-8 mb-12 border border-muted">
        
        {/* Left Side: Bar Chart */}
        <div className="w-full flex-1 space-y-3">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = courseData.rating.distribution[star];
            const percentage = (count / courseData.rating.total) * 100;
            return (
              <div key={star} className="flex items-center gap-3">
                <span className="w-3 text-sm font-medium text-muted-foreground">{star}</span>
                <div className="h-3 md:h-4 flex-1 rounded-full bg-muted overflow-hidden">
                  <div 
                    className="h-full bg-primary/80 rounded-full" 
                    style={{ width: `${percentage}%` }} 
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Big Number */}
        <div className="flex flex-col items-center justify-center shrink-0 md:pl-10 md:border-l md:border-muted-foreground/20">
          <span className="text-6xl font-bold tracking-tighter">{courseData.rating.average.toFixed(1)}</span>
          <div className="flex items-center gap-1 mt-2 mb-1">
            {renderStars(courseData.rating.average)}
          </div>
          <span className="text-sm text-muted-foreground">{courseData.rating.total} reviews</span>
        </div>
      </div>

      {/* Comments Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h3 className="text-xl font-semibold">Comments:</h3>
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search reviews" 
            className="h-9 w-full rounded-full bg-muted/50 pl-9 border-none focus-visible:ring-1"
          />
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-8">
        {filteredReviews.length === 0 ? (
          <p className="text-center text-muted-foreground py-10">No reviews found matching "{searchQuery}".</p>
        ) : (
          filteredReviews.map((review) => (
            <div key={review.id} className="flex flex-col gap-3 pb-8 border-b last:border-0 border-muted">
              {/* Review Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-muted">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base leading-none mb-1">{review.author}</h4>
                    <span className="text-xs text-muted-foreground">{review.program} • {review.date}</span>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {renderStars(review.rating)}
                </div>
              </div>
              
              {/* Review Text */}
              <p className="text-sm md:text-base leading-relaxed text-foreground/90 mt-2">
                {review.text}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Sticky Bottom Action Button */}
      <div className="fixed bottom-0 left-0 right-0 border-t bg-background/80 p-4 backdrop-blur-md md:static md:border-0 md:bg-transparent md:p-0 md:mt-12 md:backdrop-blur-none">
        <button className="mx-auto flex w-full max-w-sm items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold tracking-wide text-primary-foreground shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]">
          <ShoppingCart className="h-5 w-5" />
          Add Course to Cart
        </button>
      </div>

    </div>
  );
}