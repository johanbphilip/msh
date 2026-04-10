import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ProspectiveStudentLayout, NewStudentLayout, CurrentStudentLayout } from './layouts/StudentLayouts'
import PlaceholderPage from './components/pages/PlaceholderPage'
import ProspectiveStudentDashboard from './components/pages/ProspectiveStudentDashboard'
import ProgramsPage from './components/pages/ProgramsPage'
import ProgramsRoadmapPage from './components/pages/ProgramsRoadmapPage'
import CourseReviewPage from './components/pages/CourseReviewPage'
import CurrentStudentDashboard from './components/pages/CurrentStudentDashboard'
import CoursesPage from './components/pages/CoursesPage'
import MySchedulePage from './components/pages/MySchedulePage'
import { Toaster } from "@/components/ui/sonner"
import { ScheduleProvider } from "@/context/ScheduleContext"
import NewStudentDashboard from './components/pages/NewStudentDashboard'
import GraduationTrackerPage from './components/pages/GraduationTrackerPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScheduleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        
        <Route path="/prospective-student" element={<ProspectiveStudentLayout />}>
          <Route index element={<ProspectiveStudentDashboard />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="programs-roadmap" element={<ProgramsRoadmapPage />} />
          <Route path="course-reviews" element={<CourseReviewPage />} />
          <Route path="admissions" element={<PlaceholderPage title="Admissions Process" />} />
          <Route path="financial-aid" element={<PlaceholderPage title="Financial Aid" />} />
        </Route>

        <Route path="/new-student" element={<NewStudentLayout />}>
          <Route index element={<NewStudentDashboard />} />
          <Route path="orientation" element={<PlaceholderPage title="Orientation" />} />
          <Route path="course-registration" element={<PlaceholderPage title="Course Registration" />} />
          <Route path="housing" element={<PlaceholderPage title="Housing" />} />
          <Route path="settings" element={<PlaceholderPage title="Settings" />} />
        </Route>

        <Route path="/current-student" element={<CurrentStudentLayout />}>
          <Route index element={<CurrentStudentDashboard />} />
          <Route path="my-schedule" element={<MySchedulePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="financial-hub" element={<PlaceholderPage title="Financial Hub" />} />
          <Route path="graduation-tracker" element={<GraduationTrackerPage />} />
          <Route path="settings" element={<PlaceholderPage title="Settings" />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Toaster position="bottom-right" />
    </ScheduleProvider>
  </StrictMode>,
)
