export default function OverallProgress({ progress }) {
  return (
    <div className="graduation-overall-progress">
      <div className="graduation-progress-header">
        <span className="graduation-progress-label">Overall Progress</span>
        <span className={`graduation-progress-percentage ${progress.percentage === 100 ? 'complete' : 'incomplete'}`}>
          {progress.percentage}%
        </span>
      </div>
      <div className="graduation-progress-bar-container">
        <div
          className={`graduation-progress-bar-fill ${progress.percentage === 100 ? 'complete' : 'incomplete'}`}
          style={{ width: `${progress.percentage}%` }}
        />
      </div>
      <p className="graduation-progress-text">
        {progress.completedCourses} of {progress.totalCourses} courses completed
      </p>
    </div>
  );
}
