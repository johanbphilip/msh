export default function CourseModal({ course, onSelectOption, onClose }) {
  const checkCircleIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div className="graduation-modal" onClick={onClose}>
      <div className="graduation-modal-content" onClick={e => e.stopPropagation()}>
        <div className="graduation-modal-header">
          <h3>{course.name}</h3>
          <p>Select which course fulfills this requirement</p>
        </div>
        <div className="graduation-options-list">
          {course.options?.map(option => (
            <button
              key={option}
              className={`graduation-option-button ${course.selectedOption === option ? 'selected' : ''}`}
              onClick={() => onSelectOption(option)}
            >
              <span>{option}</span>
              {course.selectedOption === option && checkCircleIcon}
            </button>
          ))}
        </div>
        <button className="graduation-cancel-button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
