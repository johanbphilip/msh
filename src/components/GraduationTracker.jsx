import { useState, useCallback, useMemo } from 'react';
import { yearData } from '@/data/graduationData';
import OverallProgress from './OverallProgress';
import YearCard from './YearCard';
import CourseModal from './CourseModal';
import './GraduationTracker.css';

export default function GraduationTracker() {
  const [courses, setCourses] = useState(yearData);
  const [currentModalCourse, setCurrentModalCourse] = useState(null);
  const [expandedYears, setExpandedYears] = useState({});

  const progress = useMemo(() => {
    let totalCourses = 0;
    let completedCourses = 0;

    courses.forEach(year => {
      totalCourses += year.courses.length;
      completedCourses += year.courses.filter(c => c.completed).length;
    });

    const percentage = totalCourses > 0 ? Math.round((completedCourses / totalCourses) * 100) : 0;
    return { percentage, completedCourses, totalCourses, isComplete: percentage === 100 };
  }, [courses]);

  const toggleCourse = useCallback((yearIndex, courseId) => {
    setCourses(prev => {
      const newCourses = JSON.parse(JSON.stringify(prev));
      const course = newCourses[yearIndex].courses.find(c => c.id === courseId);
      if (course && !course.options) {
        course.completed = !course.completed;
      }
      return newCourses;
    });
  }, []);

  const toggleYearExpanded = useCallback((yearIndex) => {
    setExpandedYears(prev => ({
      ...prev,
      [yearIndex]: !prev[yearIndex]
    }));
  }, []);

  const openCourseOptions = useCallback((yearIndex, courseId) => {
    const course = courses[yearIndex].courses.find(c => c.id === courseId);
    if (course && course.options) {
      setCurrentModalCourse({ yearIndex, courseId, course });
    }
  }, [courses]);

  const selectOption = useCallback((option) => {
    if (currentModalCourse) {
      const { yearIndex, courseId } = currentModalCourse;
      setCourses(prev => {
        const newCourses = JSON.parse(JSON.stringify(prev));
        const course = newCourses[yearIndex].courses.find(c => c.id === courseId);
        if (course) {
          course.selectedOption = option;
          course.completed = true;
        }
        return newCourses;
      });
      setCurrentModalCourse(null);
    }
  }, [currentModalCourse]);

  const closeModal = useCallback(() => {
    setCurrentModalCourse(null);
  }, []);

  return (
    <div className="graduation-tracker-container">
      {/* Header */}
      <div className="graduation-header">
        <div className="graduation-header-title">
          <h1>Graduation Progress Tracker</h1>
        </div>
        <p className="graduation-header-subtitle">Track your journey to degree completion</p>

        <OverallProgress progress={progress} />
      </div>

      {/* Year Cards */}
      <div className="years-container">
        {courses.map((yearInfo, yearIndex) => (
          <YearCard
            key={yearInfo.year}
            yearInfo={yearInfo}
            yearIndex={yearIndex}
            isExpanded={expandedYears[yearIndex] || false}
            onToggleExpand={toggleYearExpanded}
            onToggleCourse={toggleCourse}
            onCourseOptionsClick={openCourseOptions}
          />
        ))}
      </div>

      {/* Congratulations Message */}
      {progress.isComplete && (
        <div className="congratulations">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
          <h2>Congratulations! 🎉</h2>
          <p>You've completed all required courses for graduation!</p>
        </div>
      )}

      {/* Course Options Modal */}
      {currentModalCourse && (
        <CourseModal
          course={currentModalCourse.course}
          onSelectOption={selectOption}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
