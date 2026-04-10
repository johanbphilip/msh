export default function CourseItem({
  course,
  yearIndex,
  onToggle,
  onOpenOptions
}) {
  const hasOptions = course.options && course.options.length > 0;
  const displayName = course.selectedOption
    ? `${course.name}: ${course.selectedOption}`
    : course.name;

  const handleClick = () => {
    if (hasOptions) {
      onOpenOptions(yearIndex, course.id);
    } else {
      onToggle(yearIndex, course.id);
    }
  };

  const listIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="options-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );

  return (
    <div className="graduation-course-item" onClick={handleClick}>
      {course.completed ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="course-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="course-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
        </svg>
      )}
      <span className={`course-name ${course.completed ? 'completed' : 'incomplete'}`}>
        {displayName}
      </span>
      {hasOptions && listIcon}
    </div>
  );
}
