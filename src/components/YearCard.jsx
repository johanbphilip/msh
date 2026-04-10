import CourseItem from './CourseItem';

export default function YearCard({
  yearInfo,
  yearIndex,
  isExpanded,
  onToggleExpand,
  onToggleCourse,
  onCourseOptionsClick
}) {
  const completedCount = yearInfo.courses.filter(c => c.completed).length;
  const totalCount = yearInfo.courses.length;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const isComplete = percentage === 100;

  const chevronIcon = isExpanded
    ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
    : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>;

  return (
    <div className={`graduation-year-card ${isComplete ? 'complete' : ''}`}>
      <div className="graduation-year-header">
        <div className="graduation-year-title">
          <h2>Year {yearInfo.year}</h2>
          {isComplete && (
            <svg xmlns="http://www.w3.org/2000/svg" className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </div>
        <div className="graduation-year-stats">
          <p>{completedCount} of {totalCount} courses completed</p>
          <p className={`percentage ${isComplete ? 'complete' : 'incomplete'}`}>{percentage}%</p>
        </div>
      </div>

      <div className={`graduation-year-progress-bar ${isComplete ? 'complete' : ''}`}>
        <div
          className={`graduation-year-progress-fill ${isComplete ? 'complete' : ''}`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <button
        className="graduation-toggle-courses-btn"
        onClick={() => onToggleExpand(yearIndex)}
      >
        <span>{isExpanded ? 'Hide' : 'View'} Courses</span>
        {chevronIcon}
      </button>

      {isExpanded && (
        <div className="graduation-courses-list">
          <div className="graduation-course-list-inner">
            {yearInfo.courses.map(course => (
              <CourseItem
                key={course.id}
                course={course}
                yearIndex={yearIndex}
                onToggle={onToggleCourse}
                onOpenOptions={onCourseOptionsClick}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
